# Physical AI & Humanoid Robotics Textbook Generator

This project generates comprehensive textbook content for the Physical AI & Humanoid Robotics course. It creates structured educational materials covering 10 core modules across 13 weeks of content, with assessment projects and hardware requirements. The generated content is integrated into a Docusaurus documentation site.

## Features

- Generate textbook chapters from structured course data
- Support for 10 core modules including ROS 2, NVIDIA Isaac, Humanoid Robotics, and more
- 13-week curriculum structure with specific topics
- Assessment project generation
- Hardware and architecture planning documentation
- SpecKitPlus-compatible workflows
- Docusaurus integration for documentation site

## Installation

```bash
npm install
```

## Usage

### Generate Textbook
```bash
npm run generate:textbook
```

### Generate Specific Module
```bash
npm run generate:module -- --module="ROS 2"
```

### Generate Assessment
```bash
npm run generate:assessment
```

### Validate Textbook Structure
```bash
npm run validate:textbook
```

### Run Docusaurus Documentation Site
```bash
npm run start
```

### Build Docusaurus Site
```bash
npm run build
```

## Development

```bash
# Build the application
npm run build:app

# Run in development mode
npm run dev:app

# Run Docusaurus in development mode
npm run start

# Run tests
npm test
```

## Project Structure

- `src/` - Source code for the textbook generation system
- `docs/` - Docusaurus documentation pages
- `templates/` - Markdown templates for textbook content
- `config/` - Configuration files for textbook generation
- `output/` - Generated textbook content (created during generation)

## Technologies

- TypeScript 5.x
- Node.js
- Docusaurus 3.1.0
- Express.js (for API)
- Markdown processing tools
- Jest (for testing)

## License

MIT