import { Module } from './module';
import { Assessment } from './assessment';
import { HardwareSpec } from './hardware';
import { ArchitectureComponent } from './architecture';
import { WeeklyContent } from './weekly-content';

export interface Textbook {
  id: string;
  title: string;
  version: string;
  modules: Module[];
  weeklyStructure: WeeklyContent[];
  assessments: Assessment[];
  hardwareRequirements: HardwareSpec[];
  architecture: ArchitectureComponent[];
  description?: string;
  state?: TextbookState;
}

export enum TextbookState {
  DRAFT = 'DRAFT',
  RESEARCHED = 'RESEARCHED',
  GENERATING = 'GENERATING',
  VALIDATED = 'VALIDATED',
  COMPLETE = 'COMPLETE'
}

export class TextbookModel {
  static validate(textbook: Textbook): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate required modules
    if (textbook.modules.length < 10) {
      errors.push('Must contain at least 10 core modules');
    }

    // Validate 13-week curriculum
    if (textbook.weeklyStructure.length !== 13) {
      errors.push('Must span exactly 13 weeks of content');
    }

    // Validate assessments
    if (textbook.assessments.length < 4) {
      errors.push('Must include at least 4 assessment projects');
    }

    // Validate hardware requirements
    if (textbook.hardwareRequirements.length === 0) {
      errors.push('Must specify hardware requirements');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}