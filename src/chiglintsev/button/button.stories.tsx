import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './button';

export default {
    title: 'chiglintsev/Button',
    component: Button,
    args: {
        children: 'Button',
        onClick: () => {
            console.log('yep');
        },
    },
    argTypes: {},
} as Meta<ButtonProps>;

export const Common: Story<ButtonProps> = args => <Button {...args} />;
