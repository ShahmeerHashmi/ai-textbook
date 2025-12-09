# Data Model: Physical AI & Humanoid Robotics Book

## Textbook Structure

### Textbook
- **id**: string - Unique identifier for the textbook
- **title**: string - "Physical AI & Humanoid Robotics"
- **version**: string - Version identifier
- **modules**: Module[] - Array of course modules
- **weeklyStructure**: WeeklyContent[] - 13-week curriculum structure
- **assessments**: Assessment[] - Assessment projects
- **hardwareRequirements**: HardwareSpec[] - Required hardware components
- **architecture**: ArchitectureComponent[] - System architecture elements

### Module
- **id**: string - Unique module identifier
- **name**: string - Module name (e.g., "ROS 2", "NVIDIA Isaac")
- **description**: string - Brief description of the module
- **weeks**: number[] - Week numbers this module covers
- **learningObjectives**: string[] - Learning objectives for the module
- **topics**: Topic[] - Topics covered in the module

### Topic
- **id**: string - Unique topic identifier
- **title**: string - Topic title
- **content**: string - Detailed topic content
- **prerequisites**: string[] - Prerequisites for this topic
- **resources**: Resource[] - Additional resources for the topic

### WeeklyContent
- **weekNumber**: number - Week number (1-13)
- **topics**: Topic[] - Topics to cover in this week
- **learningOutcomes**: string[] - Learning outcomes for the week
- **assignments**: Assignment[] - Assignments for the week

### Assessment
- **id**: string - Unique assessment identifier
- **name**: string - Assessment name (e.g., "ROS 2 Project")
- **type**: AssessmentType - Type of assessment
- **description**: string - Detailed description
- **requirements**: string[] - Technical requirements
- **gradingCriteria**: string[] - Grading criteria
- **duration**: string - Expected completion time

### HardwareSpec
- **id**: string - Unique hardware identifier
- **name**: string - Hardware name (e.g., "Digital Twin Workstation")
- **specifications**: string[] - Technical specifications
- **purpose**: string - Educational purpose
- **compatibility**: string[] - Compatible systems/tools

### ArchitectureComponent
- **id**: string - Unique component identifier
- **name**: string - Component name (e.g., "Sim Rig Workflow")
- **description**: string - Component description
- **dependencies**: string[] - Dependencies
- **integrationPoints**: string[] - Integration points

## Validation Rules

### Textbook Validation
- Must contain exactly 10 core modules
- Must span 13 weeks of content
- Must include at least 4 assessment projects
- Must specify hardware requirements

### Module Validation
- Each module must have a unique name
- Module names must match the specified 10 modules: Introduction, ROS 2, Gazebo & Unity, NVIDIA Isaac, Humanoid Robotics, VLA Robotics, Conversational Robotics, Assessments, Hardware, Architecture
- Each module must have at least one topic
- Learning objectives must be clearly defined

### Weekly Content Validation
- Week numbers must be sequential from 1 to 13
- Each week must have at least one topic
- Content must progress logically from basic to advanced concepts
- Weekly content must align with module assignments

### Assessment Validation
- Assessment names must match specified projects: ROS 2 Project, Gazebo Project, Isaac Pipeline, Capstone Humanoid Robot
- Each assessment must have clear requirements
- Duration must be realistic for educational context

## State Transitions

### Textbook States
- **DRAFT**: Initial state when structure is being defined
- **RESEARCHED**: Research phase complete, ready for content generation
- **GENERATING**: Content generation in progress
- **VALIDATED**: Content validated and ready for review
- **COMPLETE**: Finalized textbook ready for use

## Relationships

- Textbook 1 → * Module (Textbook contains multiple modules)
- Module 1 → * Topic (Module contains multiple topics)
- WeeklyContent 1 → * Topic (Weekly content references topics)
- Textbook 1 → * Assessment (Textbook includes multiple assessments)
- Textbook 1 → * HardwareSpec (Textbook specifies hardware requirements)
- Textbook 1 → * ArchitectureComponent (Textbook defines architecture components)