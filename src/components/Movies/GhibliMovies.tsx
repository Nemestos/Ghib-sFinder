import { ReactElement } from 'react';
import { Grid, Heading } from '@chakra-ui/react';
import { useGhibliMovies } from '../../hooks/useGhibliMovies';
import { IMovie } from '../../interfaces';
import { GhibliMovieCard } from './GhibliMovieCard';

export function GhibliMovies():ReactElement {
  const { isLoading, isError, data } = useGhibliMovies();
  if (isLoading) {
    return (<Heading>Loading...</Heading>);
  }

  if (isError) {
    return (
      <Heading>Error when loading </Heading>
    );
  }
  const moviesElements = data?.map((movie:IMovie) => <GhibliMovieCard movie={movie} />);
  return (
    <Grid templateColumns="repeat(5,1fr)" gap={6} margin={6}>
      {moviesElements}
    </Grid>
  );
}
