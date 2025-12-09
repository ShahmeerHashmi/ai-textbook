import { Topic } from './topic';
import { Assignment } from './assignment';

export interface WeeklyContent {
  weekNumber: number;
  topics: Topic[];
  learningOutcomes: string[];
  assignments: Assignment[];
}

export class WeeklyContentModel {
  static validate(weeklyContent: WeeklyContent): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate week number
    if (weeklyContent.weekNumber < 1 || weeklyContent.weekNumber > 13) {
      errors.push('Week number must be between 1 and 13');
    }

    // Validate topics
    if (!weeklyContent.topics || weeklyContent.topics.length === 0) {
      errors.push('Each week must have at least one topic');
    }

    // Validate learning outcomes
    if (!weeklyContent.learningOutcomes || weeklyContent.learningOutcomes.length === 0) {
      errors.push('Each week must have defined learning outcomes');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}