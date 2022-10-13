import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Submit',
    },
    argTypes: {
        className: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        },

    }

} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {}
