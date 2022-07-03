import React, { ReactElement } from 'react';
import { Flex, Heading, HStack, Spacer, } from '@chakra-ui/react';
import { ToggleTheme } from './ToggleTheme';

function GhibliRoutes():ReactElement{

}

export function GhibliHeader(): ReactElement {
    return (
        <Flex justifyContent="center">
            <HStack justifyContent="space-between">
                <Heading className="font-loader">
                    Ghiblis Finder
                </Heading>
                <Spacer/>
                <ToggleTheme/>
            </HStack>
        </Flex>
    );
}
