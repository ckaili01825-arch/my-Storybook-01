import Button01 from './Button01';

export default {
  title: '通用組件/Button01',
  component: Button01,
  tags: ['autodocs'],
  argTypes: {
    label:{control: 'text'},
    backgroundColor: { control: 'color' }, // 讓顏色選擇器正常運作
    color:{ control: 'color'}
  },
};

// 1. 基本狀態
export const Primary = {
  args: {
    label: '按我',
    backgroundColor: '#1ea7fd',
  },
};

// 2. 警告狀態
export const Warning = {
  args: {
    label: '刪除',
    backgroundColor: 'red',
    color: '#ffffff'
  },
};

// 3. 小尺寸
export const Small = {
  args: {
    label: '小按鈕',
    size: 'sm',
  },
};

export const Blank = {
  args:{

  }
}