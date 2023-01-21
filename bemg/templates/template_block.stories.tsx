import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ${Block}, ${Block}Props } from './${block}';

export default {
    title: '${user}/${Block}',
    component: ${Block},
    args: {},
    argTypes: {},
} as Meta<${Block}Props>;

export const Common: Story<${Block}Props> = (args) => <${Block} {...args} />;
