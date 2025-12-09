// @ts-check

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
        'introduction',
        'foundations',
        'ros2',
        'gazebo-unity',
        'nvidia-isaac',
        'humanoid-robotics',
        'conversational-robotics'
      ],
    },
    {
      type: 'category',
      label: 'Assessments',
      items: [
        'assessments/ros-project',
        'assessments/gazebo-project',
        'assessments/isaac-pipeline',
        'assessments/capstone-humanoid'
      ],
    },
    {
      type: 'category',
      label: 'Hardware & Architecture',
      items: [
        'hardware/digital-twin-workstation',
        'hardware/jetson-edge-kit',
        'architecture/sim-rig-workflow',
        'architecture/edge-backend'
      ],
    }
  ],
};

module.exports = sidebars;