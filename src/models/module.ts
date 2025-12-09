import { Topic } from './topic';

export interface Module {
  id: string;
  name: string;
  description: string;
  weeks: number[];
  learningObjectives: string[];
  topics: Topic[];
}

export class ModuleModel {
  static validate(module: Module): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate unique name
    if (!module.name || module.name.trim() === '') {
      errors.push('Module name is required');
    }

    // Validate weeks
    if (!module.weeks || module.weeks.length === 0) {
      errors.push('Module must be assigned to at least one week');
    }

    // Validate topics
    if (!module.topics || module.topics.length === 0) {
      errors.push('Module must have at least one topic');
    }

    // Validate learning objectives
    if (!module.learningObjectives || module.learningObjectives.length === 0) {
      errors.push('Module must have clearly defined learning objectives');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}