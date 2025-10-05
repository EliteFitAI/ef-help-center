// /** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Get Started',
      items: ['get-started/Welcome'],
    },
    {
      type: 'category',
      className: 'new-featurep',
      label: 'Product Tour',
      items: [
        {
          type: 'category',
          label: 'Fitness',
          items: [
            {
              type: 'category',
              label: 'Admin',
              items: [
                'product-tour/Fitness/Admin/4addingUsers',
                'product-tour/Fitness/Admin/5viewingLibrary',
                'product-tour/Fitness/Admin/6assigningProgram',
                'product-tour/Fitness/Admin/9creatingTeams',
                'product-tour/Fitness/Admin/7analyticsReports',
                'product-tour/Fitness/Admin/8otherFeatures',
                'product-tour/Fitness/Admin/1userJourney',
                'product-tour/Fitness/Admin/2adminLogin',
              ],
            },

            {
              type: 'category',
              label: 'User',
              items: [
                {
                  type: 'category',
                  label: 'Physio Portal',
                  items: [
                    'product-tour/Fitness/User/Physio Portal/1startingExcercise',
                    'product-tour/Fitness/User/Physio Portal/2duringExcersize',
                    'product-tour/Fitness/User/Physio Portal/3endExcercise',
                    'product-tour/Fitness/User/Physio Portal/4viewExcercise',
                    'product-tour/Fitness/User/Physio Portal/5viewProgress',
                  ],
                },
                'product-tour/Fitness/User/1userFlow',
                'product-tour/Fitness/User/2patientSignup',
                'product-tour/Fitness/User/3patientSignIn',
                'product-tour/Fitness/User/5otherFeatures',
              ],
            },
          ]
        },
        {
          type: 'category',
          label: 'Physiotherapy',
          items: [
            {
              type: 'category',
              label: 'Admin',
              items: [
                'product-tour/Physiotherapy/Admin/4addingUsers',
                'product-tour/Physiotherapy/Admin/5viewingLibrary',
                'product-tour/Physiotherapy/Admin/6assigningProgram',
                'product-tour/Physiotherapy/Admin/9creatingTeams',
                'product-tour/Physiotherapy/Admin/7analyticsReports',
                'product-tour/Physiotherapy/Admin/8otherFeatures',
                'product-tour/Physiotherapy/Admin/1userJourney',
                'product-tour/Physiotherapy/Admin/2adminLogin',
              ],
            },

            {
              type: 'category',
              label: 'User',
              items: [
                {
                  type: 'category',
                  label: 'Physio Portal',
                  items: [
                    'product-tour/Physiotherapy/User/Physio Portal/1startingExcercise',
                    'product-tour/Physiotherapy/User/Physio Portal/2duringExcersize',
                    'product-tour/Physiotherapy/User/Physio Portal/3endExcercise',
                    'product-tour/Physiotherapy/User/Physio Portal/4viewExcercise',
                    'product-tour/Physiotherapy/User/Physio Portal/5viewProgress',
                  ],
                },
                'product-tour/Physiotherapy/User/1userFlow',
                'product-tour/Physiotherapy/User/2patientSignup',
                'product-tour/Physiotherapy/User/3patientSignIn',
                'product-tour/Physiotherapy/User/5otherFeatures',
              ],
            },
          ]
        },
        {
          type: 'category',
          label: 'Assessments',
          className: 'new-featurep',
          items: [
            'product-tour/Assessments/Assessment',
            'product-tour/Assessments/Troubleshoot',
            {
              type: 'doc',
              id: 'product-tour/Assessments/Login',
              className: 'ml-2', // add margin-left
            },
            {
              type: 'doc',
              id: 'product-tour/Assessments/Workout',
              className: 'ml-2',
            },
            {
              type: 'doc',
              id: 'product-tour/Assessments/Report',
              className: 'ml-2',
            },
            {
              type: 'doc',
              id: 'product-tour/Assessments/Miscellaneous',
              className: 'ml-2',
            },
          ],
        }

      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting Tips',
      items: [
        'troubleshoot/1submitting_support_requests',
        'troubleshoot/Requirements',
        'troubleshoot/Sharing',
        'troubleshoot/StickFigure',
      ],
    },
    {
      type: 'category',
      label: 'FAQs',
      items: [
        'FAQs/FAQs1',       // ✅ included
        'FAQs/FAQs2',   // ❌ commented out — hidden
      ],
    },
  ],
};

module.exports = sidebars;
