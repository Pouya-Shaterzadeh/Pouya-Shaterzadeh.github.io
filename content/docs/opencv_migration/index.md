---
title: "OpenCV Gazebo ROS 1 to ROS 2 Migration"
linkTitle: "OpenCV Migration"
date: 2026-03-10
type: book
weight: 20
authors:
  - Pouya
tags:
  - ROS 1
  - ROS 2
  - Gazebo
  - OpenCV
summary: "A breakdown of migrating the pkg_cv_ros_tutorial_by_dhanuzch repository from ROS 1 to ROS 2, focusing on Python nodes, launch files, and CMake changes."
---

# ROS 1 to ROS 2 Migration: OpenCV with Gazebo

This is a documentation of the successful migration of the `pkg_cv_ros_tutorial_by_dhanuzch` repository from ROS 1 to ROS 2 (Foxy and newer), following the official ROS 2 Migration Guide. 

This repository was originally a ROS 1 package used in the "Using OpenCV with Gazebo in ROS" tutorial series by `@dhanuzch`. It has now been ported and is available at:  
**[GitHub Repository: pkg_cv_ros_tutorial_by_dhanuzch](https://github.com/Pouya-Shaterzadeh/pkg_cv_ros_tutorial_by_dhanuzch)**

The migration includes updating package manifests, the build system (`ament_cmake`), Python source code for nodes, and transitioning ROS 1 XML launch files to ROS 2 Python launch files.

---

## Proposed Changes

### Phase 1: Package Manifest and Build System
Ensure the package's foundation is fully ROS 2 compliant. Update dependencies and build configurations to use `ament_cmake`.

**`package.xml`**
- Changed `<package format="2">` to at least format 3 for ROS 2 compatibility.
- Replaced `<buildtool_depend>catkin</buildtool_depend>` with `<buildtool_depend>ament_cmake</buildtool_depend>`.
- Replaced occurrences of `rospy` with `rclpy`.
- Added `sensor_msgs` and `cv_bridge` as `<exec_depend>`.
- Added `<export><build_type>ament_cmake</build_type></export>`.

**`CMakeLists.txt`**
- Updated `cmake_minimum_required` to `VERSION 3.8`.
- Replaced `find_package(catkin ...)` with `find_package(ament_cmake REQUIRED)`.
- Used `install(PROGRAMS ...)` to install the Python scripts into `lib/${PROJECT_NAME}` so they can be executed natively.
- Replaced `catkin_package()` with `ament_package()`.

<br>

### Phase 2: Python Node Migration
Migrate the ROS 1 specific Python code (`rospy`) to the ROS 2 API (`rclpy`).

**`scripts/camera_read.py` & `scripts/decode_qr.py`**
- Changed `import rospy` to `import rclpy` and included `from rclpy.node import Node`.
- Ensured script node classes inherit natively from `Node` and updated constructors via `super().__init__()`.
- Replaced `rospy.Subscriber` with `self.create_subscription()`.
- Built modern logging (`self.get_logger().info()`).
- Updated `main()` execution blocks to leverage `rclpy.spin()`.

<br>

### Phase 3: Launch Files and Testing
Recreate the environment execution flow using ROS 2 Python launch files and conduct final system integration and testing.

**`launch/1_world_and_script.launch.py`**
- Created a modern ROS 2 Python launch script importing logic to extend `GAZEBO_MODEL_PATH`.
- Added `Node` execution actions sequentially alongside simulation boots.

**`launch/2_world_and_script.launch.py`**
- Converted the legacy target to spawn the QR-decoding process seamlessly via concurrent `ExecuteProcess` dependencies!

---

## Verification Plan

### Automated/Compilation Tests
1. Run `colcon build --symlink-install` from the workspace root.
2. Ensure the package compiles cleanly without CMake or ament errors.
3. Verify that `source install/setup.bash` makes the package correctly visible to `ros2 pkg list`.

### System Integration & Manual Verification
To manually test:
- Initiate the simulation using `ros2 launch pkg_cv_ros_tutorial_by_dhanuzch 1_world_and_script.launch.py`.
- Confirm that the `cv2.imshow` window appears and natively resolves drone camera outputs.
- Test `2_world_and_script.launch.py` to confirm QR decoding highlights!

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
</div>
