export interface Topic {
  id: string;
  title: string;
  content: string;
  prerequisites: string[];
  resources: Resource[];
}

export interface Resource {
  id: string;
  name: string;
  url: string;
  type: ResourceType;
}

export enum ResourceType {
  DOCUMENTATION = 'documentation',
  VIDEO = 'video',
  CODE = 'code',
  PAPER = 'paper',
  TOOL = 'tool'
}

export class TopicModel {
  static validate(topic: Topic): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate title
    if (!topic.title || topic.title.trim() === '') {
      errors.push('Topic title is required');
    }

    // Validate content
    if (!topic.content || topic.content.trim() === '') {
      errors.push('Topic content is required');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}