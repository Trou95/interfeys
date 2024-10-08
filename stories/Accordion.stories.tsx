import React from 'react';
import type { Meta } from '@storybook/react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionList,
} from '../src/';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
};

export default meta;

export function Primary() {
    return (
        <>
            <AccordionList>
                <Accordion>
                    <AccordionHeader className="text-lg font-medium text-left text-gray-900 dark:text-gray-100">
                        Toggle me!
                    </AccordionHeader>
                    <AccordionBody className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Adipisci architecto debitis earum fuga iusto modi
                        molestias necessitatibus provident quam! Nisi!
                    </AccordionBody>
                </Accordion>
            </AccordionList>
        </>
    );
}
