import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './button';

export default {
    title: 'dariaborisenko/Button',
    component: Button,
    args: {children: "button"},
    argTypes: {},
} as Meta<ButtonProps>;

export const Common: Story<ButtonProps> = (args) => <Button {...args} />;
