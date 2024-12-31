/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Lorem Ipsum Inc.',
    position: 'Dolor Sit Amet',
    url: 'https://loremipsum.dev',
    startDate: '2024-07-01',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula sollicitudin velit, sed consequat enim facilisis ac.',
    highlights: [
      'Vivamus congue quam ut magna finibus, ac dignissim arcu dapibus.',
      'Integer laoreet nisl a libero pellentesque, at consequat urna malesuada.',
    ],
  },
  {
    name: 'Aenean Corp.',
    position: 'Consectetur Adipiscing',
    url: 'https://aeneancorp.com',
    startDate: '2022-01-01',
    endDate: '2024-07-01',
    summary: `Curabitur vel augue ut nisi vestibulum tempus in vel quam. Phasellus id eros at lorem blandit fermentum. Donec ac lacinia libero.`,
    highlights: [
      'Morbi sit amet ligula vitae metus accumsan interdum.',
      'Proin feugiat massa id sapien volutpat luctus.',
      'Nullam rhoncus elit in risus tincidunt tincidunt.',
    ],
  },
  {
    name: 'Ut Nulla Facilisi',
    position: 'Vestibulum Malesuada',
    url: 'http://utnulla.com',
    startDate: '2017-04-01',
    summary: `Aliquam euismod est at vehicula dignissim. Suspendisse fringilla velit sed diam auctor cursus.`,
    highlights: [
      'Suspendisse potenti. Nunc viverra justo non dolor eleifend.',
      'Curabitur scelerisque ligula in ligula faucibus, ac venenatis libero interdum.',
    ],
  },
  {
    name: 'Phasellus LLC',
    position: 'Egestas Faucibus',
    url: 'https://phasellus.com',
    startDate: '2014-01-01',
    endDate: '2022-01-01',
    summary: `Sed auctor metus ac justo varius, in tempus magna convallis. Donec bibendum orci vel libero mattis, a finibus elit vulputate.`,
    highlights: [
      'Mauris consequat arcu in mi volutpat dapibus.',
      'Ut facilisis augue a tellus sollicitudin euismod.',
      'Cras porttitor turpis non orci iaculis, nec gravida nisi vehicula.',
    ],
  },
];

export default work;
