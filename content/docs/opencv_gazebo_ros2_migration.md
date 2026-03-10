---
title: "ROS 1 to ROS 2 Migration: OpenCV with Gazebo"
date: 2026-03-10
authors:
  - Pouya
tags:
  - ROS 1
  - ROS 2
  - Gazebo
  - OpenCV
  - Python
summary: "A detailed breakdown of migrating the pkg_cv_ros_tutorial_by_dhanuzch repository from ROS 1 to ROS 2, focusing on Python nodes, launch files, and CMake changes."
---

# ROS 1 to ROS 2 Migration: OpenCV with Gazebo

This is a documentation of the successful migration of the `pkg_cv_ros_tutorial_by_dhanuzch` repository from ROS 1 to ROS 2 (Foxy and newer), following the official ROS 2 Migration Guide. 

This repository was originally a ROS 1 package used in the "Using OpenCV with Gazebo in ROS" tutorial series by @dhanuzch. It has now been ported and is available at:  
[**https://github.com/Pouya-Shaterzadeh/pkg_cv_ros_tutorial_by_dhanuzch**](https://github.com/Pouya-Shaterzadeh/pkg_cv_ros_tutorial_by_dhanuzch)

The migration includes updating package manifests, the build system (`ament_cmake`), Python source code for nodes, and transitioning ROS 1 XML launch files to ROS 2 Python launch files.

## Proposed Changes

---

### Phase 1: Package Manifest and Build System
**Responsibility**: Ensure the package's foundation is fully ROS 2 compliant. Update dependencies and build configurations to use `ament_cmake`.

#### [MODIFY] `package.xml`
- Changed `<package format="2">` to at least format 3 for ROS 2 compatibility.
- Replaced `<buildtool_depend>catkin</buildtool_depend>` with `<buildtool_depend>ament_cmake</buildtool_depend>`.
- Replaced `build_depend`, `build_export_depend`, and `exec_depend` occurrences of `rospy` with `rclpy`.
- Added `sensor_msgs` and `cv_bridge` as `<exec_depend>` since they are required at runtime by the scripts.
- Added `<export><build_type>ament_cmake</build_type></export>` to declare the ament build type.

#### [MODIFY] `CMakeLists.txt`
- Updated `cmake_minimum_required` to `VERSION 3.8`.
- Replaced `find_package(catkin REQUIRED COMPONENTS rospy std_msgs)` with `find_package(ament_cmake REQUIRED)`.
- Used `install(PROGRAMS ...)` to install the Python scripts from `scripts/` into `lib/${PROJECT_NAME}` so they can be executed via `ros2 run`.
- Used `install(DIRECTORY ...)` to install `launch/`, `models/`, and `worlds/` to the `share/${PROJECT_NAME}` destination.
- Replaced `catkin_package()` with `ament_package()`.

---

### Phase 2: Python Node Migration
**Responsibility**: Migrate the ROS 1 specific Python code (`rospy`) to the ROS 2 API (`rclpy`).

#### [MODIFY] `scripts/camera_read.py`
- Changed `import rospy` to `import rclpy` and included `from rclpy.node import Node`.
- Made the `camera_1` class inherit from `Node` and updated its `__init__` constructor (e.g., `super().__init__('camera_read')`).
- Replaced `rospy.Subscriber` with `self.create_subscription(Image, "/camera_1/image_raw", self.callback, 10)`.
- Updated logging: replaced `rospy.logerr(e)` with `self.get_logger().error(str(e))` and `rospy.loginfo` with `self.get_logger().info`.
- Rewrote the `main()` function to initialize `rclpy`, instantiate the node class, and use `rclpy.spin(node)`.
- Ensured appropriate shutdown logic (`node.destroy_node()`, `rclpy.shutdown()`).

#### [MODIFY] `scripts/decode_qr.py`
- Applied identical `rospy` to `rclpy` conversions for the node class and `main` function as described above.
- Verified that `cv_bridge` interactions correctly process `sensor_msgs/msg/Image` under the ROS 2 environment.

---

### Phase 3: Launch Files and Testing
**Responsibility**: Recreate the environment execution flow using ROS 2 Python launch files and conduct final system integration and testing.

#### [NEW] `launch/1_world_and_script.launch.py`
- Created a ROS 2 Python launch file.
- Implemented logic to append the package's local `models` directory to the `GAZEBO_MODEL_PATH` environment variable.
- Included the standard `gazebo.launch.py` from the `gazebo_ros` package, configuring it to load the custom world file `worlds/1_world.world`.
- Added a `Node` execution action for the `camera_read` script from this package.

#### [NEW] `launch/2_world_and_script.launch.py`
- Created a similar ROS 2 Python launch file pointing to `worlds/2_world.world`.
- Executed the `decode_qr` node concurrently with the Gazebo simulation.

#### [DELETE] `launch/1_world_and_script.launch` & `launch/2_world_and_script.launch`
- Safely removed the legacy ROS 1 XML launch files.

#### [DELETE] `launch/1_world.launch` & `launch/2_world.launch`
- Removed or converted these to standalone ROS 2 launch files.

---

## Verification Plan

### Automated/Compilation Tests
- Run `colcon build --symlink-install` from the workspace root.
- Ensure the package compiles cleanly without CMake or ament errors.
- Verify that `source install/setup.bash` makes the package visible to `ros2 pkg list`.

### System Integration & Manual Verification
- Initiate the simulation using `ros2 launch pkg_cv_ros_tutorial_by_dhanuzch 1_world_and_script.launch.py`.
- Verify that Gazebo starts with the correct environment and world layout.
- Confirm that the popup `cv2.imshow` window appears and correctly shows the drone camera's viewpoint.
- Test `2_world_and_script.launch.py` and verify that the QR code is successfully detected, bounded by the blue box, and decoded in the live video output.

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
</div>
