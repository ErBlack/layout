import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { cnButton } from './button.constants';

import './button.css';

import './_size/button_size_s.css';
import './_size/button_size_m.css';
import './_size/button_size_l.css';

import './_view/button_view_default.css';
import './_view/button_view_main.css';
import './_view/button_view_light.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    size?: 's' | 'm' | 'l';
    view?: 'default' | 'main' | 'light';
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
}

export const Button: FC<ButtonProps> = ({
    children,
    className,
    type = 'button',
    size = 'm',
    view = 'default',
    ...props
}) => {
    return (
        <button className={cnButton({ size, view }, [className])} type={type} {...props}>
            {children}
        </button>
    );
};
