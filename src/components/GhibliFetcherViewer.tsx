import React, { ReactElement } from 'react';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import { UseQueryResult } from 'react-query';

interface GhibliFetcherViewerProps<GhibliTypeInterface> {
    queryFetcher: () => UseQueryResult<GhibliTypeInterface[]>;
    cardElement: ReactElement;
}

export function GhibliFetcherViewer<T>(props: GhibliFetcherViewerProps<T>): ReactElement {
    const {
        isLoading,
        isError,
        data
    } = props.queryFetcher();
    if (isLoading) {
        return (<Heading>Loading...</Heading>);
    }

    if (isError) {
        return (
            <Heading>Error when loading </Heading>
        );
    }
    const elements = data?.map((elt: T) => <props.cardElement {...elt}/>)
    return (
        <SimpleGrid minChildWidth="330px" spacing={5} justifyContent="center">
            {elements}
        </SimpleGrid>
    );
}
