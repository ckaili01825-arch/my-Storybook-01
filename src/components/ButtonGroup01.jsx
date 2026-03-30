import React from 'react';
import Button01 from './Button01';

const ButtonGroup01 = ({ buttons = [], orientation = 'horizontal' }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    gap: '10px',
  };

  return (
    <div className="button-group" style={containerStyle}>
      {buttons.map((btnProps, index) => (
        // 這裡就是組合：把資料傳給子元件
        <Button01 key={index} {...btnProps} />
      ))}
    </div>
  );
};

export default ButtonGroup01;