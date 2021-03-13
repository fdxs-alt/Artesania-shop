import React, { useState } from 'react'
import { Photo } from '../../../types/types'
import {
  SliderWrapper,
  SelectedImage,
  Slider,
  Slide,
  InnerSlide,
} from './PhotosSlider.style'

interface Props {
  photos: Photo[]
}

const PhotoSlider: React.FC<Props> = ({ photos }): JSX.Element => {
  const [selected, setSelected] = useState(0)
  return (
    <SliderWrapper>
      <SelectedImage
        src={photos[selected].responsiveImage.src}
        loading="lazy"
        alt="product"
      />
      <Slider>
        {photos.map((photo, i) => (
          <Slide
            onClick={() => setSelected(i)}
            key={i}
            style={{
              left: `${i * 32}%`,
              transform:
                photos.length > 3 && `translateX(-${selected * (100 / 2)}%)`,
            }}
          >
            <InnerSlide src={photo.responsiveImage.src} loading="lazy" />
          </Slide>
        ))}
      </Slider>
    </SliderWrapper>
  )
}

export default PhotoSlider
