export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate?: string;
  points: number;
  requirements: string[];
  submissionGuidelines: string[];
}

export class AssignmentModel {
  static validate(assignment: Assignment): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate title
    if (!assignment.title || assignment.title.trim() === '') {
      errors.push('Assignment title is required');
    }

    // Validate description
    if (!assignment.description || assignment.description.trim() === '') {
      errors.push('Assignment description is required');
    }

    // Validate points
    if (assignment.points < 0) {
      errors.push('Assignment points must be non-negative');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}