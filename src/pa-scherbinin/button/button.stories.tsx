import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './button';

export default {
    title: 'pa-scherbinin/Button',
    component: Button,
    args: {
        children: 'Button',
    },
    argTypes: {},
} as Meta<ButtonProps>;

export const Common: Story<ButtonProps> = args => <Button {...args} />;
