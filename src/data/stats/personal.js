import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2003-08-24T03:25:00');
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
    key: 'states',
    label: 'States visited in the US',
    value: '11',
    link: 'https://www.google.com/maps/d/u/0/edit?mid=1tjQQplwdcFGCy1nuSLEDJ7LMOwXRvw8&usp=sharing',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: '5',
    link: 'https://www.google.com/maps/d/u/0/edit?mid=18kOmnOfnaGtPH29moBeDQquCNfml3vM&usp=sharing',
  },
  {
    key: 'location',
    label: 'Current city and my hometown 🏙️',
    value: 'New York, NY',
  },
  {
    key: 'location2',
    label: 'Going to school in',
    value: 'Bethlehem, PA',
  },
  {
    key: 'weightlifting',
    label: 'Squat PR',
    value: '320 lbs @ 145 bw',
  },
  {
    key: 'weightlifting1',
    label: 'Bench PR',
    value: '200 lbs @ 140 bw',
  },
  {
    key: 'weightlifting2',
    label: 'Deadlift PR',
    value: '365 lbs @ 145 bw',
  },


];

export default data;
