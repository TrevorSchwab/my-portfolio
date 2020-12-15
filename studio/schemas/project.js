export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'frontEnd',
      title: 'Front end',
      type: 'string',
      options: {
        list: [
          { value: 'personal', title: 'Personal' },
          { value: 'client', title: 'Client' },
          { value: 'school', title: 'School' },
        ],
      },
    },
    {
      name: 'middleAndBackEnd',
      title: 'Middle and back end',
      type: 'string',
      options: {
        list: [
          { value: 'personal', title: 'Personal' },
          { value: 'client', title: 'Client' },
          { value: 'school', title: 'School' },
        ],
      },
    },
    {
      name: 'miscTools',
      title: 'Misc tools',
      type: 'string',
      options: {
        list: [
          { value: 'personal', title: 'Personal' },
          { value: 'client', title: 'Client' },
          { value: 'school', title: 'School' },
        ],
      },
    },
  ],
};
