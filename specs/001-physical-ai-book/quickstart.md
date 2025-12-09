# Quickstart Guide: Physical AI & Humanoid Robotics Book Generation

## Overview
This guide will help you set up and use the textbook generation system for the Physical AI & Humanoid Robotics course. The system creates comprehensive textbook chapters from the defined course structure.

## Prerequisites
- Node.js 18+ installed
- TypeScript 5.x installed
- SpecKitPlus command-line tools installed

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
```

3. Verify the installation:
```bash
npm run build
```

## Setting Up the Textbook Structure

The textbook structure is defined in the `config/textbook-config.json` file. The system expects the following 10 core modules:

1. Introduction
2. ROS 2
3. Gazebo & Unity
4. NVIDIA Isaac
5. Humanoid Robotics
6. VLA Robotics
7. Conversational Robotics
8. Assessments
9. Hardware
10. Architecture

## Generating Textbook Content

### Generate All Chapters
```bash
npm run generate:textbook
```

### Generate Specific Module
```bash
npm run generate:module -- --module="ROS 2"
```

### Generate Weekly Content
```bash
npm run generate:week -- --week=1
```

### Generate Assessment Projects
```bash
npm run generate:assessment -- --project="ROS 2 Project"
```

## Configuration

### Textbook Configuration
The main configuration is in `config/textbook-config.json`:

```json
{
  "title": "Physical AI & Humanoid Robotics",
  "version": "1.0.0",
  "modules": [
    {
      "id": "introduction",
      "name": "Introduction",
      "weeks": [1],
      "learningObjectives": ["Understand Physical AI", "Explore embodied intelligence"]
    }
  ],
  "weeks": 13,
  "assessments": [
    {
      "id": "ros-project",
      "name": "ROS 2 Project",
      "type": "hands-on"
    }
  ]
}
```

### Template Customization
Templates for different content types are located in the `templates/` directory:
- `textbook-template.md` - Base template for textbook chapters
- `module-template.md` - Template for module structure
- `assessment-template.md` - Template for assessment projects

## Validation

Validate your textbook structure before generation:

```bash
npm run validate:textbook
```

This will check:
- Module completeness
- Week structure alignment
- Assessment requirements
- Hardware specification validity

## Output Structure

Generated content will be placed in the `output/` directory:

```
output/
├── textbook/
│   ├── introduction/
│   ├── ros2/
│   ├── gazebo-unity/
│   └── [other modules]
├── assessments/
│   ├── ros2-project.md
│   ├── gazebo-project.md
│   └── [other assessments]
└── hardware-specs/
    └── requirements.md
```

## Running Tests

Validate the generation system:

```bash
npm test
```

## Example Usage

### Generate the Complete Textbook
```bash
npm run generate:textbook
```

### Generate and Validate
```bash
npm run generate:textbook && npm run validate:textbook
```

## Troubleshooting

### Common Issues

1. **Module not found**: Ensure the module name matches exactly one of the 10 core modules
2. **Template error**: Check that all required template variables are defined
3. **Configuration error**: Verify the `textbook-config.json` follows the expected structure

### Getting Help
```bash
npm run help:textbook
```

## Next Steps

1. Customize templates for your specific needs
2. Add additional content to the base templates
3. Integrate with your course management system
4. Set up automated generation workflows