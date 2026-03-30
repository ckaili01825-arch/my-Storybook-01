import React from 'react';
import './Button01.css'; // 記得建立對應的 CSS 檔案

const STATUS_STYLES = {
  primary: { backgroundColor: '#1ea7fd', color: 'white' },
  warning: { backgroundColor: '#d31200', color: 'white' },
  default: { backgroundColor: '#eee', color: '#333' }
};

const Button01 = ({ label, variant = 'default', onClick, size = 'md' }) => {
  const activeStyle = STATUS_STYLES[variant] || STATUS_STYLES.default;
  const style = {
    backgroundColor: activeStyle.backgroundColor, // 這裡寫死了，外部沒辦法傳 backgroundColor 進來覆蓋
    color: activeStyle.color,
    padding: size === 'sm' ? '8px 16px' : '12px 28px',
    fontWeight: size === 'sm' ? '400' : '700',
    border: 'none',
  };

  return (
    <button className="button01" onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button01;