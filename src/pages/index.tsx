import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read the Textbook - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

// Textbook data - in a real implementation, this would come from your content generation system
const textbookData = {
  title: "Physical AI & Humanoid Robotics",
  description: "A comprehensive textbook covering the fundamental concepts, technologies, and practical applications of physical artificial intelligence and humanoid robotics.",
  modules: [
    {
      id: "introduction",
      name: "Introduction",
      weeks: [1],
      description: "Foundations of Physical AI and embodied intelligence",
      learningObjectives: [
        "Understand what Physical AI is",
        "Explore embodied intelligence concepts",
        "Identify why Physical AI matters",
        "Define learning outcomes for the course"
      ]
    },
    {
      id: "foundations",
      name: "Foundations of Physical AI",
      weeks: [1, 2],
      description: "Core concepts of Physical AI and sensor systems",
      learningObjectives: [
        "Understand foundational concepts of Physical AI",
        "Learn about sensors and perception",
        "Explore basic robotics concepts"
      ]
    },
    {
      id: "ros2",
      name: "ROS 2",
      weeks: [3, 4, 5],
      description: "Robot Operating System 2 fundamentals",
      learningObjectives: [
        "Learn ROS 2 basics",
        "Understand nodes, topics, and services",
        "Build ROS 2 packages"
      ]
    },
    {
      id: "gazebo-unity",
      name: "Gazebo & Unity",
      weeks: [6, 7],
      description: "Simulation environments for robotics",
      learningObjectives: [
        "Use Gazebo simulation environment",
        "Work with URDF/SDF models",
        "Visualize in Unity"
      ]
    },
    {
      id: "nvidia-isaac",
      name: "NVIDIA Isaac",
      weeks: [8, 9, 10],
      description: "NVIDIA Isaac platform for robotics",
      learningObjectives: [
        "Explore NVIDIA Isaac platform",
        "Learn perception and manipulation",
        "Understand RL and Sim-to-Real"
      ]
    },
    {
      id: "humanoid-robotics",
      name: "Humanoid Robotics",
      weeks: [11, 12],
      description: "Humanoid robot kinematics and control",
      learningObjectives: [
        "Understand humanoid kinematics",
        "Learn locomotion and balance",
        "Explore manipulation techniques"
      ]
    },
    {
      id: "conversational-robotics",
      name: "Conversational Robotics",
      weeks: [13],
      description: "Integrating GPT, voice, and vision",
      learningObjectives: [
        "Implement GPT + Voice + Vision",
        "Create conversational interfaces",
        "Integrate multiple modalities"
      ]
    }
  ],
  assessments: [
    {
      id: "ros-project",
      name: "ROS 2 Project",
      type: "hands-on",
      duration: "2-3 weeks",
      description: "Implement a complete ROS 2 project with nodes, topics, and services"
    },
    {
      id: "gazebo-project",
      name: "Gazebo Project",
      type: "simulation",
      duration: "2-3 weeks",
      description: "Create and simulate a robot in Gazebo environment"
    },
    {
      id: "isaac-pipeline",
      name: "Isaac Pipeline",
      type: "pipeline",
      duration: "3-4 weeks",
      description: "Build an end-to-end perception and manipulation pipeline using NVIDIA Isaac"
    },
    {
      id: "capstone-humanoid",
      name: "Capstone Humanoid Robot",
      type: "capstone",
      duration: "4-5 weeks",
      description: "Design and implement a complete humanoid robot system"
    }
  ],
  hardware: [
    {
      id: "digital-twin-workstation",
      name: "Digital Twin Workstation",
      specs: ["High-performance GPU", "Multi-core CPU", "16GB+ RAM"],
      purpose: "Simulation and development environment"
    },
    {
      id: "jetson-edge-kit",
      name: "Jetson Edge Kit",
      specs: ["NVIDIA Jetson board", "Robotics sensors", "Connectivity"],
      purpose: "Edge computing for robotics"
    }
  ]
};

function ModuleCard({ module }) {
  return (
    <div className={styles.moduleCard}>
      <h3 className={styles.moduleTitle}>{module.name}</h3>
      <p className={styles.weekInfo}>Weeks: {module.weeks.join(', ')}</p>
      <p>{module.description}</p>
      <div className={styles.learningObjectives}>
        <h4>Learning Objectives:</h4>
        <ul>
          {module.learningObjectives.map((obj, idx) => (
            <li key={idx}>{obj}</li>
          ))}
        </ul>
      </div>
      <Link to={`/docs/${module.id}`} className="button button--primary button--sm">
        Read Module
      </Link>
    </div>
  );
}

function AssessmentCard({ assessment }) {
  return (
    <div className={styles.assessmentCard}>
      <h3>{assessment.name}</h3>
      <p><strong>Type:</strong> {assessment.type} | <strong>Duration:</strong> {assessment.duration}</p>
      <p>{assessment.description}</p>
      <Link to={`/docs/assessments/${assessment.id}`} className="button button--secondary button--sm">
        View Assessment
      </Link>
    </div>
  );
}

function HomepageContent() {
  return (
    <main>
      <section className={styles.textbookModules}>
        <div className="container">
          <Heading as="h2">Textbook Modules</Heading>
          <p>This comprehensive textbook covers 10 core modules across 13 weeks of content:</p>

          {textbookData.modules.map((module, index) => (
            <ModuleCard key={index} module={module} />
          ))}

          <Heading as="h2" style={{ marginTop: '2rem' }}>Assessment Projects</Heading>
          <p>Apply your knowledge through practical projects:</p>

          {textbookData.assessments.map((assessment, index) => (
            <AssessmentCard key={index} assessment={assessment} />
          ))}

          <Heading as="h2" style={{ marginTop: '2rem' }}>Hardware Requirements</Heading>
          <p>Required tools and systems for practical exercises:</p>

          <div className={styles.moduleCard}>
            {textbookData.hardware.map((hardware, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <h3>{hardware.name}</h3>
                <p><strong>Purpose:</strong> {hardware.purpose}</p>
                <p><strong>Specifications:</strong> {hardware.specs.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Textbook for Physical AI & Humanoid Robotics">
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  );
}