const skills = [
  {
    title: 'Lorem Ipsum Dolor',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Sit Amet Consectetur',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Adipiscing Elit',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Pellentesque Dui',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Fusce Ut Nulla',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Curabitur Aenean',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Vestibulum Nunc',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Mauris Blandit',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Quisque Vel',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Sed Convallis',
    competency: 4,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Nulla Pellentesque',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Vitae Risus',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Nunc Dui',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Lacinia Et',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Vulputate Elit',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Proin Pretium',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Euismod Cursus',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Aliquam Etiam',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Orci Nullam',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Quis Nibh',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Proin Cras',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Aliquam Mauris',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Vulputate Libero',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Nunc Dapibus',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Cursus Mauris',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Phasellus Pretium',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Ut Ornare',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Vestibulum In',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Sed Auctor',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Nullam Elementum',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Leo Ipsum',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Mauris Vitae',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Semper Quis',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Maecenas Imperdiet',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Vestibulum Feugiat',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Aliquam Tincidunt',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Lacinia Libero',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Fusce Pellentesque',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Cras Tincidunt',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Donec Interdum',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Mauris Auctor',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Mollis Vitae',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Pharetra Nunc',
    competency: 2,
    category: ['Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Cras Tincidunt',
    competency: 3,
    category: ['Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
