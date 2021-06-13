import React from 'react';
import InputText from './InputText';

export default {
  title: 'InputText',
  component: InputText,
};

const Template = args => <InputText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'InputText',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'InputText',
};
