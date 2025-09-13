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
                {
                  type: 'category',
                  label: 'Admin Portal',
                  items: [
                    'product-tour/Fitness/Admin/Admin Portal/4addingUsers',
                    'product-tour/Fitness/Admin/Admin Portal/5viewingLibrary',
                    'product-tour/Fitness/Admin/Admin Portal/6assigningProgram',
                    // 'product-tour/Admin/Admin Portal/7analyticsReports',
                    // 'product-tour/Admin/Admin Portal/8otherFeatures',
                  ],
                },
                // 'product-tour/Admin/1userJourney',
                // 'product-tour/Admin/2adminLogin',
              ],
            },

            // {
            //   type: 'category',
            //   label: 'User',
            //   items: [
            //     {
            //       type: 'category',
            //       label: 'Physio Portal',
            //       items: [
            //         // 'product-tour/User/Physio Portal/1startingExcercise',
            //         // 'product-tour/User/Physio Portal/2duringExcersize',
            //         // 'product-tour/User/Physio Portal/3endExcercise',
            //         // 'product-tour/User/Physio Portal/4viewExcercise',
            //         // 'product-tour/User/Physio Portal/5viewProgress',
            //       ],
            //     },
            //     // 'product-tour/User/1userFlow',
            //     // 'product-tour/User/2patientSignup',
            //     // 'product-tour/User/3patientSignIn',
            //     // 'product-tour/User/5otherFeatures',
            //   ],
            // },
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
                {
                  type: 'category',
                  label: 'Admin Portal',
                  items: [
                    'product-tour/Physiotherapy/Admin/Admin Portal/4addingUsers',
                    'product-tour/Physiotherapy/Admin/Admin Portal/5viewingLibrary',
                    'product-tour/Physiotherapy/Admin/Admin Portal/6assigningProgram',
                    // 'product-tour/Admin/Admin Portal/7analyticsReports',
                    // 'product-tour/Admin/Admin Portal/8otherFeatures',
                  ],
                },
                // 'product-tour/Admin/1userJourney',
                // 'product-tour/Admin/2adminLogin',
              ],
            },

            // {
            //   type: 'category',
            //   label: 'User',
            //   items: [
            //     {
            //       type: 'category',
            //       label: 'Physio Portal',
            //       items: [
            //         // 'product-tour/User/Physio Portal/1startingExcercise',
            //         // 'product-tour/User/Physio Portal/2duringExcersize',
            //         // 'product-tour/User/Physio Portal/3endExcercise',
            //         // 'product-tour/User/Physio Portal/4viewExcercise',
            //         // 'product-tour/User/Physio Portal/5viewProgress',
            //       ],
            //     },
            //     // 'product-tour/User/1userFlow',
            //     // 'product-tour/User/2patientSignup',
            //     // 'product-tour/User/3patientSignIn',
            //     // 'product-tour/User/5otherFeatures',
            //   ],
            // },
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
