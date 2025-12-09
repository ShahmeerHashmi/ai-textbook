export interface Assessment {
  id: string;
  name: string;
  type: AssessmentType;
  description: string;
  requirements: string[];
  gradingCriteria: string[];
  duration: string;
}

export enum AssessmentType {
  HANDS_ON = 'hands-on',
  SIMULATION = 'simulation',
  PIPELINE = 'pipeline',
  CAPSTONE = 'capstone'
}

export class AssessmentModel {
  static validate(assessment: Assessment): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate name
    if (!assessment.name || assessment.name.trim() === '') {
      errors.push('Assessment name is required');
    }

    // Validate requirements
    if (!assessment.requirements || assessment.requirements.length === 0) {
      errors.push('Assessment must have clear requirements');
    }

    // Validate duration
    if (!assessment.duration || assessment.duration.trim() === '') {
      errors.push('Assessment duration must be specified');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}