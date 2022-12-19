import React, { useCallback, useEffect, useState } from 'react';
import Box from './components/Box';

const BoxContainer = () => {
  // Initial data
  let boxes = [
    {
      name: 'A',
      color: '#B1F6A6',
    },
    {
      name: 'B',
      color: '#F58B8B',
    },
    {
      name: 'C',
      color: '#FAF583',
    },
    {
      name: 'D',
      color: '#8DE0FD',
    },
  ];
  const [data, setData] = useState(boxes);

  const handleOnClick = useCallback((from, to) => {
    setData((d) => generateNewBoxes(d, from, to));
  }, []);

  const generateNewBoxes = (data, from, to) => {
    let newBoxes = [...data];
    [newBoxes[from], newBoxes[to]] = [newBoxes[to], newBoxes[from]];
    return newBoxes;
  };

  return (
    <div className="box-container">
      {data.map((box, boxIndex) => (
        <Box key={boxIndex} name={box.name} color={box.color} index={boxIndex} isLast={boxIndex === data.length - 1} handleOnClick={handleOnClick} />
      ))}
    </div>
  );
};

export default BoxContainer;
