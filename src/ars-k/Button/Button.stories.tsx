import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './Button';

export default {
    title: 'ars-k/Button',
    component: Button,
    args: {
        children: 'Button',
    },
    argTypes: {},
} as Meta<ButtonProps>;

export const Common: Story<ButtonProps> = args => <Button {...args} />;
