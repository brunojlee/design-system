import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@bepenques-designsys/react';
import { ArrowRight } from 'phosphor-react';
export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send',
        variant: 'primary',
        disabled: false,
        size: 'md',
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'inline-radio' },
        },
        size: {
            options: ['sm', 'md'],
            control: { type: 'inline-radio' },
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        onClick: { action: 'click' },
    },
};
export const Primary = {};
export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Create new',
    },
};
export const Tertiary = {
    args: {
        variant: 'tertiary',
        children: 'Cancel',
    },
};
export const Small = {
    args: {
        size: 'sm',
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const WithIcon = {
    args: {
        children: (_jsxs(_Fragment, { children: ["Pr\u00F3ximo passo", _jsx(ArrowRight, { weight: "bold" })] })),
    },
};
