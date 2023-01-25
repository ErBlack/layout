import React, { FC, ReactNode } from 'react';

import { cnButton } from './Button.constants';

import './Button.css';

import './_size/Button_size_l.css';
import './_size/Button_size_m.css';
import './_size/Button_size_s.css';

import './_view/Button_view_default.css';
import './_view/Button_view_light.css';
import './_view/Button_view_main.css';

export interface ButtonProps {
    children: ReactNode;
    onClick?: VoidFunction;
    disabled?: boolean;
    size?: 's' | 'm' | 'l';
    view?: 'default' | 'main' | 'light';
}

export const Button: FC<ButtonProps> = ({ children, onClick, disabled, size = 'm', view = 'default' }) => {
    return (
        <button className={cnButton({ size, view })} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};
