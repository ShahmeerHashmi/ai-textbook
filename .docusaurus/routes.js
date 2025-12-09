import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/physical-ai-humanoid-robotics/__docusaurus/debug',
    component: ComponentCreator('/physical-ai-humanoid-robotics/__docusaurus/debug', 'e01'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics/__docusaurus/debug/config',
    component: ComponentCreator('/physical-ai-humanoid-robotics/__docusaurus/debug/config', '568'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics/__docusaurus/debug/content',
    component: ComponentCreator('/physical-ai-humanoid-robotics/__docusaurus/debug/content', 'f4f'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics/__docusaurus/debug/globalData',
    component: ComponentCreator('/physical-ai-humanoid-robotics/__docusaurus/debug/globalData', 'e8f'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics/__docusaurus/debug/metadata',
    component: ComponentCreator('/physical-ai-humanoid-robotics/__docusaurus/debug/metadata', '6f3'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics/__docusaurus/debug/registry',
    component: ComponentCreator('/physical-ai-humanoid-robotics/__docusaurus/debug/registry', '147'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics/__docusaurus/debug/routes',
    component: ComponentCreator('/physical-ai-humanoid-robotics/__docusaurus/debug/routes', '4d2'),
    exact: true
  },
  {
    path: '/physical-ai-humanoid-robotics/docs',
    component: ComponentCreator('/physical-ai-humanoid-robotics/docs', '6a0'),
    routes: [
      {
        path: '/physical-ai-humanoid-robotics/docs',
        component: ComponentCreator('/physical-ai-humanoid-robotics/docs', 'abe'),
        routes: [
          {
            path: '/physical-ai-humanoid-robotics/docs',
            component: ComponentCreator('/physical-ai-humanoid-robotics/docs', '1ca'),
            routes: [
              {
                path: '/physical-ai-humanoid-robotics/docs/architecture/edge-backend',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/architecture/edge-backend', 'cc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/architecture/sim-rig-workflow',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/architecture/sim-rig-workflow', '631'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/assessments/capstone-humanoid',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/assessments/capstone-humanoid', '3ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/assessments/gazebo-project',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/assessments/gazebo-project', 'c64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/assessments/isaac-pipeline',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/assessments/isaac-pipeline', '0ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/assessments/ros-project',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/assessments/ros-project', '826'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/conversational-robotics',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/conversational-robotics', 'a57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/foundations',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/foundations', '707'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/gazebo-unity',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/gazebo-unity', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/hardware/digital-twin-workstation',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/hardware/digital-twin-workstation', '7a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/hardware/jetson-edge-kit',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/hardware/jetson-edge-kit', '9a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/humanoid-robotics',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/humanoid-robotics', 'e2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/intro',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/intro', '4e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/introduction',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/introduction', 'b5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/nvidia-isaac',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/nvidia-isaac', 'c0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/physical-ai-humanoid-robotics/docs/ros2',
                component: ComponentCreator('/physical-ai-humanoid-robotics/docs/ros2', '785'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/physical-ai-humanoid-robotics/',
    component: ComponentCreator('/physical-ai-humanoid-robotics/', '367'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
