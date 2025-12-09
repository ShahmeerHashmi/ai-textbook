import fs from 'fs-extra';
import path from 'path';
import { Textbook } from '../models/textbook';
import { Module } from '../models/module';
import { Assessment } from '../models/assessment';

export class DocusaurusService {
  private docsPath: string;

  constructor(docsPath: string = './docs') {
    this.docsPath = docsPath;
  }

  /**
   * Generate Docusaurus documentation from textbook structure
   */
  async generateFromTextbook(textbook: Textbook): Promise<void> {
    // Create the main intro page
    await this.generateIntroPage(textbook);

    // Generate module pages
    for (const module of textbook.modules) {
      await this.generateModulePage(module);
    }

    // Generate assessment pages
    for (const assessment of textbook.assessments) {
      await this.generateAssessmentPage(assessment);
    }

    // Update sidebar configuration
    await this.updateSidebar(textbook);
  }

  private async generateIntroPage(textbook: Textbook): Promise<void> {
    const introContent = `---
sidebar_position: 1
---

# ${textbook.title}

${textbook.description || 'Comprehensive textbook on Physical AI and Humanoid Robotics'}

## Course Overview

This textbook covers ${textbook.modules.length} core modules across ${textbook.weeklyStructure.length} weeks of content.

## Learning Outcomes

${textbook.modules.map(m => `- ${m.name}: ${m.learningObjectives.join(', ')}\n`).join('')}

## Course Structure

${textbook.modules.map((m, index) => `${index + 1}. [${m.name}](${this.getModuleLink(m.id)})`).join('\n')}
`;

    const introPath = path.join(this.docsPath, 'intro.md');
    await fs.writeFile(introPath, introContent, 'utf8');
  }

  private async generateModulePage(module: Module): Promise<void> {
    const moduleContent = `---
sidebar_position: ${module.weeks[0] || 1}
---

# ${module.name}

## Overview

${module.description}

## Learning Objectives

${module.learningObjectives.map(obj => `- ${obj}`).join('\n')}

## Topics Covered

${module.topics.map(topic => `### ${topic.title}\n\n${topic.content}\n`).join('\n')}

## Week ${module.weeks.join(', ')}

### Prerequisites

${module.topics.flatMap(topic => topic.prerequisites).map(p => `- ${p}`).join('\n')}

### Resources

${module.topics.flatMap(topic => topic.resources).map(r => `- ${r}`).join('\n')}
`;

    const modulePath = path.join(this.docsPath, `${module.id}.md`);
    await fs.writeFile(modulePath, moduleContent, 'utf8');
  }

  private async generateAssessmentPage(assessment: Assessment): Promise<void> {
    const assessmentContent = `---
sidebar_position: 100
---

# ${assessment.name}

## Description

${assessment.description}

## Requirements

${assessment.requirements.map(req => `- ${req}`).join('\n')}

## Grading Criteria

${assessment.gradingCriteria.map(crit => `- ${crit}`).join('\n')}

## Duration

${assessment.duration}
`;

    const assessmentPath = path.join(this.docsPath, 'assessments', `${assessment.id}.md`);
    await fs.ensureDir(path.dirname(assessmentPath));
    await fs.writeFile(assessmentPath, assessmentContent, 'utf8');
  }

  private getModuleLink(moduleId: string): string {
    return `./${moduleId}.md`;
  }

  private async updateSidebar(textbook: Textbook): Promise<void> {
    const sidebarContent = `// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        ${textbook.modules.map(m => `'${m.id}'`).join(',\n        ')}
      ],
    },
    {
      type: 'category',
      label: 'Assessments',
      items: [
        ${textbook.assessments.map(a => `'assessments/${a.id}'`).join(',\n        ')}
      ],
    },
  ],
};

module.exports = sidebars;
`;

    await fs.writeFile('./sidebars.js', sidebarContent, 'utf8');
  }
}