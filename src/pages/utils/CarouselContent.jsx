import React from 'react'
import { Box } from '@mui/material'
import { Carousel } from '../../components'

import Section from './Section'

var _image = []

const CarouselContent = ({ images, children, title }) => {
    _image = images.map(img => <Box component="img" src={img} alt="Tien ich" sx={{ width: "100%" }} />)

    return (
        <Section title={title} >
            <Carousel items={_image} />
            <Box width="100%" marginTop={2}>
                {children}
            </Box>
        </Section >
    );
}

export default CarouselContent