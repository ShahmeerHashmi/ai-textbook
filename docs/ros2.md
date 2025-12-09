---
sidebar_position: 4
---

# ROS 2

## Overview

Robot Operating System 2 (ROS 2) is a flexible framework for writing robot software. It is a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robot behavior across a wide variety of robot platforms.

## Nodes, Topics, Services

### Nodes
Nodes are processes that perform computation. ROS is designed to be a distributed system where nodes can be distributed across different machines.

### Topics
Topics are used for one-way communication between nodes. Publishers send messages to topics, and subscribers receive messages from topics.

### Services
Services provide a request/response communication pattern. A client sends a request to a service, and the service returns a response.

## Building Packages

ROS 2 uses the concept of packages to organize code. A package contains libraries, executables, configuration files, and other resources needed for a specific functionality.

## Learning Outcomes

By the end of this module, you will:
- Understand the architecture of ROS 2
- Create and run nodes, publishers, and subscribers
- Implement services for request/response communication
- Build and manage ROS 2 packages
- Integrate hardware with ROS 2 systems