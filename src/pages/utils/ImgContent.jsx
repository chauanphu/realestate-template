import React from 'react'
import { Box } from '@mui/material'

import Section from './Section'

const ImgContent = ({ img, children, title }) => {
    return (
        <Section title={title}>
            <Box component="img" src={img} alt="Mat" sx={{ width: "100%" }} />
            <Box width="100%" marginTop={2}>
                {children}
            </Box>
        </Section>
    );
}

export default ImgContent