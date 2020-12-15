export default {
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'companyLogo',
      title: 'company logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'stackImage1',
      title: 'stack image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'stackImage2',
      title: 'stack image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'stackImage3',
      title: 'stack image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'githubLogo',
      title: 'github logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'companyDescription',
      title: 'company description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
};
