import { ReactElement } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Image } from '@chakra-ui/react';

export interface ImageSliderProps {
    images: string[];
}

export function ImageSlider(props: ImageSliderProps): ReactElement {
  const { images } = props;

  return (
    <Carousel infiniteLoop>
      {images.map((image) => <Image src={image} height="auto" width="800px" />)}
    </Carousel>
  );
}
