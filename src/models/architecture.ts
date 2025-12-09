export interface ArchitectureComponent {
  id: string;
  name: string;
  description: string;
  dependencies: string[];
  integrationPoints: string[];
}

export class ArchitectureComponentModel {
  static validate(architecture: ArchitectureComponent): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate name
    if (!architecture.name || architecture.name.trim() === '') {
      errors.push('Architecture component name is required');
    }

    // Validate description
    if (!architecture.description || architecture.description.trim() === '') {
      errors.push('Architecture component description is required');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}