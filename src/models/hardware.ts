export interface HardwareSpec {
  id: string;
  name: string;
  specifications: string[];
  purpose: string;
  compatibility: string[];
}

export class HardwareSpecModel {
  static validate(hardware: HardwareSpec): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate name
    if (!hardware.name || hardware.name.trim() === '') {
      errors.push('Hardware name is required');
    }

    // Validate purpose
    if (!hardware.purpose || hardware.purpose.trim() === '') {
      errors.push('Hardware purpose is required');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}