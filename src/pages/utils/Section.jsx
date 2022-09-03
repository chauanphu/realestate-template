import React from 'react'
import { Container, Box } from '@mui/material'

import Title from './Titile'

const Section = ({ children, title }) => {
    return (
        <>
            {/* Introduction */}
            {title && <Title id={title.id} title={title.value} />}

            <Container maxWidth='xl' sx={{
                width: { xs: "100%", md: "60%" },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Box width="100%" marginTop={2}>
                    {children}
                </Box>
            </Container>
            {/* End Introduction */}
        </>
    );
}

export default Section