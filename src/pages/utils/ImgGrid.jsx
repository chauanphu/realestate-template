import React from 'react'
import { Box, ImageList, ImageListItem } from '@mui/material'

import Section from './Section'

const ImgGrid = ({ images, children, title, cols }) => {
    return (
        <Section title={title}>
            <Box width="100%" marginTop={2}>
                <ImageList sx={{ width: "100%", height: 600 }} gap={12} cols={cols}>
                    {images.map((item, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={item}
                                alt={""}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                {children}
            </Box>
        </Section>
    );
}

export default ImgGrid