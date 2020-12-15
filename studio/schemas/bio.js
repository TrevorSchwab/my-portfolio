export default {
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    {
      name: 'bioImage',
      title: 'Bio image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bioBlurb',
      title: 'Bio blurb',
      type: 'string',
    },
    {
      name: 'resume',
      title: 'Resume',
      type: 'file',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
      ],
    },
    {
      name: 'workStatus',
      title: 'Work status',
      type: 'string',
    },
  ],
};
