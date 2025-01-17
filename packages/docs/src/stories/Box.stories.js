import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Text } from '@bepenques-designsys/react';
export default {
    title: 'Surfaces/Box',
    component: Box,
    args: {
        children: _jsx(Text, { children: "Testando..." }),
    },
    argTypes: {
        children: {
            control: {
                disable: true,
            },
        },
    },
};
export const Primary = {};
