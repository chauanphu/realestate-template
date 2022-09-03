import React from 'react'
import { Grid, Stack } from '@mui/material'
import { grey } from '@mui/material/colors';

import Section from './Section';

const IntroTable = ({ items, title }) => {
    return (
        <Section title={title}>
            <Stack>
                {items.map(item => {
                    return <Grid key={item.key} container sx={{ borderBottom: 1, borderColor: grey[400], py: 2 }}>
                        <Grid item xs={4} sx={{ fontWeight: "bold" }}>{item.key}</Grid>
                        <Grid item xs={8} sx={item.value_style}>{item.value}</Grid>
                    </Grid>
                })}
            </Stack>
        </Section>
    );
}

export default IntroTable