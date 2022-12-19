import React, { memo } from 'react';
import './Box.css';

const Box = (props) => {
  console.log('Render box name', props.name);
  const moveButtonClick = (currentIndex, moveType) => {
    props.handleOnClick(currentIndex, moveType === 'right' ? currentIndex + 1 : currentIndex - 1);
  };
  return (
    <div className="box" style={{ backgroundColor: props.color }}>
      <div className="box-height">{props.name}</div>
      <div className="box-height">
        {props.index > 0 && (
          <div className="box__left-button" onClick={() => moveButtonClick(props.index, 'left')}>
            ◀
          </div>
        )}
        {!props.isLast && (
          <div className="box__right-button" onClick={() => moveButtonClick(props.index, 'right')}>
            ▶
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Box);
