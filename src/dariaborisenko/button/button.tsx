
import React, { FC, ReactNode } from 'react';

import { cnButton } from './button.constants';
import './button.css';
import './_size/button_size_l.css'
import './_size/button_size_m.css'
import './_size/button_size_s.css'
import './_view/button_view_light.css'
import './_view/button_view_main.css'
import './_view/button_view_default.css'

export interface ButtonProps {
    children: ReactNode;
    onClick?: VoidFunction;
    view?: 'default' | 'main' | 'light';
    size?: 's' | 'm' | 'l'; 
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, onClick, size = 'm', disabled = false, view = 'default'}) => {
    return (
        <button className={cnButton({size, view})} onClick={onClick} disabled={disabled}>{children}</button>
    );
};
