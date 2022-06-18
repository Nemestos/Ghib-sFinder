import { ReactElement, useState } from 'react';
import {
  Badge, Box, Button, Center, Collapse, Heading, Image, Text, useColorModeValue,
} from '@chakra-ui/react';
import { IMovie } from '../../interfaces';

export interface GhibliMovieCardProps {
    movie: IMovie;
}

export function GhibliMovieCard(props: GhibliMovieCardProps): ReactElement {
  const { movie } = props;
  const bg = useColorModeValue('gray', 'black');
  const { descCollapsed, setDescCollapsed } = useState(false);
  return (
    <Box
      maxW="sm"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="center"
      rounded="md"
      boxShadow="dark-lg"
      bg={bg}
      padding={4}
    >
      <Center flexDirection="column">
        <Box display="flex" justifyContent="space-between" alignItems="baseline">
          <Heading textAlign="center">
            {movie.title}
            /
            {movie.original_title}
            (
            {movie.release_date}
            )
          </Heading>
          <Badge borderRadius="full">
            {movie.rt_score}
            /100
          </Badge>
        </Box>
        <Text autoCapitalize="words" as="i" align="center">
          {movie.director}
          |
          {movie.producer}
        </Text>

      </Center>
      <Image src={movie.image}></Image>
      <Box>
        <Collapse startingHeight={20}>
          {movie.description}
        </Collapse>
        <Button size="sm"></Button>
      </Box>
    </Box>
  );
}
