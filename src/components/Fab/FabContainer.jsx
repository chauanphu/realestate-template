import { Box } from '@mui/material'

const FabContainer = ({ children }) => {
    return (
        <Box sx={{
            margin: 0,
            top: 'auto',
            left: 20,
            bottom: 20,
            right: 'auto',
            position: 'fixed',
            display: "flex",
            flexDirection: "column"
        }}>
            {children}
        </Box>
    )
}

export default FabContainer