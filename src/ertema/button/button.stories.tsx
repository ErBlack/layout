import React from 'react';

import { Button } from './button';

export default {
    title: 'ertema/Button',
    args: {
        children: 'Кнопка',
    },
    component: Button,
};

export const Common = args => <Button {...args} />;
