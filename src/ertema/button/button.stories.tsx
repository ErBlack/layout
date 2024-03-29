import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './button';

export default {
    title: 'ertema/Button',
    component: Button,
    args: {
        children: 'Button',
        disabled: false,
    },
    argTypes: {},
} as Meta<ButtonProps>;

export const Common: Story<ButtonProps> = args => <Button {...args} />;
