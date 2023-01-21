
import React, { FC, ReactNode } from 'react';

import { cn${Block} } from './${block}.constants';

import './${block}.css';

export interface ${Block}Props {
    children: ReactNode
}

export const ${Block}: FC<${Block}Props> = ({ children }) => {
    return (
        <div className={cn${Block}({})}>{children}</div>
    );
};
