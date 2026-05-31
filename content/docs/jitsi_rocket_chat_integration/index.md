---
title: "Self-Hosted Jitsi Video Conferencing with Rocket.Chat"
linkTitle: "Jitsi + Rocket.Chat"
date: 2026-05-31
type: book
weight: 10
show_date: false
profile: false
share: true
summary: "A step-by-step guide to integrating a self-hosted Jitsi server with Rocket.Chat for one-click video calls, eliminating the need for external logins and third-party services."
---

## Overview

![Architecture diagram showing Jitsi + Rocket.Chat integration flow](architecture.png)

Rocket.Chat's Marketplace offers a Jitsi app, but it ships with a dependency on Google authentication. Every time a user joins a call, they are redirected to a Google login page — an extra step that kills spontaneity and frustrates teams who just want to click and talk.

This guide walks through setting up a **self-hosted Jitsi Meet** instance and wiring it directly into your Rocket.Chat workspace so that any user can start a voice or video call with a **single click** — no Google account, no extra logins, no third-party services.

**What you will end up with:**

- A Jitsi Meet server running in Docker, accessible through your own domain
- Rocket.Chat configured to generate Jitsi call URLs pointing to your server
- Traefik (or your reverse proxy) handling TLS for both services
- All workspace users able to initiate calls from any channel, team, or DM

## Prerequisites

Before you begin, make sure you have:

- A Linux server with Docker and Docker Compose installed
- A domain name pointed to your server's public IP (e.g., `jitsi.yourdomain.com`)
- Traefik or another reverse proxy already running (optional but recommended)
- Rocket.Chat installed and accessible (this guide assumes a Docker-based deployment)

## 1. Deploy Jitsi Meet with Docker

Jitsi provides an official Docker Compose setup. Clone their repository and configure it.

### Clone the Jitsi Docker repository

```bash
git clone https://github.com/jitsi/docker-jitsi-meet.git
cd docker-jitsi-meet
```

### Create the environment file

```bash
cp env.example .env
```

Open `.env` and adjust the following values:

```bash
# Public URL for the Jitsi web frontend
PUBLIC_URL=https://jitsi.yourdomain.com

# Authentication — set to anonymous for no login requirement
ENABLE_AUTH=0
AUTH_TYPE=anonymous

# Domain — must match what Rocket.Chat will use
TZ=UTC

# Optional: disable lobby, recording, and other features you don't need
ENABLE_LOBBY=0
ENABLE_RECORDING=0
ENABLE_TRANSCRIPTIONS=0
```

> **Important:** If you previously had `ENABLE_AUTH=1` with JWT, make sure to also remove or comment out `JWT_APP_ID` and `JWT_APP_SECRET` from `.env`.

### Configure Prosody for anonymous access

If you are disabling authentication, update the Prosody configuration to allow anonymous connections.

Edit `config/prosody/conf.d/jitsi-meet.cfg.lua` and ensure the `anonymous authentication` section is present:

```lua
VirtualHost "jitsi.yourdomain.com"
    authentication = "anonymous"
```

### Custom client configuration

Create or edit `config/custom-config-overrides.js` to disable any JWT-related client settings:

```javascript
/* eslint-disable no-undef */
module.exports = {
    enableInsecureRoomNameHashing: false,
    enableFeaturesFromUrl: false,
};
```

Remove any references to `tokenAuthUrl`, `disableProfile`, `disableInviteFunctions`, or `disableDeepLinking` if they were previously set.

### Start the Jitsi stack

```bash
docker compose up -d
```

Verify all containers are running:

```bash
docker compose ps
```

You should see `web`, `prosody`, `jicofo`, and `jvb` (Jitsi Videobridge) all in a healthy state.

## 2. Install the Jitsi App in Rocket.Chat

1. Open your Rocket.Chat workspace as an administrator.
2. Go to **Marketplace** > **Explore** and search for **Jitsi**.
3. Click **Install** and accept the permissions.
4. Once installed, go to the **Settings** tab of the Jitsi App.
5. Configure the following:

| Field | Value |
|---|---|
| **Domain** | `jitsi.yourdomain.com` |
| **Use SSL** | Enabled |
| **Use Authentication Token** | Disabled |

6. Click **Save changes**.

### Set Jitsi as the Default Conference Provider

1. Go to **Manage** > **Workspace** > **Settings** > **Conference Call**.
2. Select **Jitsi** as the Default Provider.
3. Enable or disable call options in DMs, channels, teams as needed.
4. Click **Save changes**.

## 3. Configure Reverse Proxy Routing

If you are using Traefik (which is common for Docker-based Rocket.Chat setups), you need to route your Jitsi domain to the Jitsi web container.

### Traefik labels for Jitsi

In your Traefik configuration (or within the Jitsi `docker-compose.yml`), add labels similar to:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.jitsi.rule=Host(`jitsi.yourdomain.com`)"
  - "traefik.http.routers.jitsi.entrypoints=websecure"
  - "traefik.http.routers.jitsi.tls.certresolver=letsencrypt"
  - "traefik.http.services.jitsi.loadbalancer.server.port=80"
```

If Jitsi is in a separate Docker Compose file from Traefik, make sure both stacks share the same Docker network:

```bash
docker network connect traefik_network jitsi-web
```

### Expose only through Traefik

**Do not** expose Jitsi on a separate public port (e.g., `4443`). Keep it accessible only through Traefik on ports 80/443. This reduces your attack surface and keeps all traffic flowing through a single entry point.

## 4. Fix Common Issues

### 403 Forbidden on `video-conference.start`

If clicking the video call button returns a 403 error, the `call-management` permission is likely restricted.

**Fix:** Grant the permission to all roles:

```javascript
// Connect to your Rocket.Chat MongoDB and run:
db.rocketchat_permissions.updateOne(
    { _id: "call-management" },
    { $set: { roles: ["admin", "user", "guest", "leader", "moderator", "owner"] } }
);
```

Then **restart Rocket.Chat** for the change to take effect.

### Jitsi App using `meet.jit.si` instead of your domain

The Jitsi App reads its settings during `onEnable`, which runs at startup. If you changed the domain in the database or settings after the app was already enabled, it will still use the old value.

**Fix:** After updating the domain setting, **restart Rocket.Chat** so the app re-initializes with the correct domain.

### Calls fail on mobile

If desktop works but mobile fails, ensure:

1. Your Jitsi server has a valid TLS certificate (check with `curl -v https://jitsi.yourdomain.com`).
2. The `PUBLIC_URL` in `.env` matches the actual URL users will access.
3. WebSocket connections are not being blocked by your proxy configuration.

## 5. Verify Everything Works

1. Open any channel in Rocket.Chat.
2. Click the **video call** icon in the room header (or type `/jitsi`).
3. A new browser tab should open with your Jitsi room.
4. Other participants can join by clicking the call message in the channel.

No login screens. No redirects. Just a call.

## References

Here are the docs and tutorials I used to make this work:

- [Jitsi Docker Deployment Guide](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker/)
- [Rocket.Chat Jitsi App](https://docs.rocket.chat/docs/jitsi-app)
- [Rocket.Chat Conference Call User Guide](https://docs.rocket.chat/docs/conference-call-users-guide)
- [Rocket.Chat Apps-Engine](https://developer.rocket.chat/docs/getting-started-with-apps-engine)
- [Traefik Proxy Documentation](https://doc.traefik.io/traefik/)

---

## About the Author

I am **Pouya**. I develop and contribute to open-source solutions in robotics, AI, and self-hosted Linux infrastructure.

Let's connect:

- **[LinkedIn](https://www.linkedin.com/in/pouya-shaterzadeh-b88426284/)**
- **[GitHub](https://github.com/Pouya-Shaterzadeh/)**

<div style="display:none;" aria-hidden="true">
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
word word word word word word word word word word word word word word word word word word word word
</div>
