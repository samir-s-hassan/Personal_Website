import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-08-24T00:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 'TBD',
    link: 'https://support.google.com/mymaps/answer/3024454?hl=en&amp%3Bref_topic=3188329',
  },
  {
    key: 'location',
    label: 'Current city and my hometown 🏙️',
    value: 'New York, NY',
  },
  {
    key: 'location2',
    label: 'Go to school in',
    value: 'Bethlehem, PA',
  },
];

export default data;
