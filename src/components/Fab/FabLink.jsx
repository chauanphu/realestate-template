import { Fab } from '@mui/material'

const FabLink = ({ children, url, sx }) => {
    return (
        <Fab aria-label="zalo" sx={sx} onClick={() => {
            window.open(url)
        }}>
            {children}
        </Fab>
    )
}

export default FabLink