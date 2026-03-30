import ButtonGroup01 from './ButtonGroup01';

export default {
  title: '組合元件/ButtonGroup01',
  component: ButtonGroup01,
};

export const Default = {
  args: {
    orientation: 'horizontal',
    buttons: [
      { label: '儲存', variant: 'warning'},
      { label: '取消'},
      { label: '刪除',variant: 'primary'},
    ],
  },
};

export const VerticalStack = {
  args: {
    ...Default.args,
    orientation: 'vertical',
  },
};