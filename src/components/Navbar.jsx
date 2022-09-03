import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AppBar, Toolbar, Button, Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import logo from 'assets/logo-extended.png'

//Import State
import DropNav from 'components/DropNav';

function Navbar({
    pc_style = {
        fontSize: '1.2em',
        color: 'green',
        py: 0.5,
    }, drawer_style = {
        fontSize: '1.2em',
        color: 'green',
        py: 0.5,
    }, tabs = [] },
) {

    const [drawer, setDrawer] = useState(false)
    const theme = useTheme();
    const pc = useMediaQuery(theme.breakpoints.up('xl'));

    const toggleDrawer = (event, newValue) => {
        setDrawer(newValue)
    }

    return (
        <>
            {/* Navbar */}
            <AppBar sx={{
                height: "80px",
                backgroundColor: 'white',
                position: 'sticky',
                display: 'flex',
                justifyContent: 'center',
                opacity: 0.9,
                mb: 1,
            }}>
                {/* Logo */}
                <IconButton size="large" onClick={event => toggleDrawer(event, true)} sx={{
                    display: { xl: 'none' },
                    position: 'absolute',
                }}>
                    <MenuIcon />
                </IconButton>
                <Box component="img" src={logo} alt="Logo" sx={{
                    width: 200,
                    height: 70,
                    position: { xs: 'absolute', xl: 'block' },
                    margin: { xs: 'auto', xl: '0 0 0 50px' },
                    ml: 5,
                    left: 0,
                    right: 0,
                }}></Box>
                {
                    pc && (<Toolbar sx={{
                        width: 'fit-content',
                        display: {
                            xs: 'none',
                            xl: 'flex',
                        },
                        alignItems: 'center',
                        position: 'absolute',
                        margin: 'auto',
                        left: 0,
                        right: 0,
                    }}>
                        {tabs.map((tab) => (
                            <Button key={tab.url} component="a" href={tab.url} sx={tab.style ? tab.style : pc_style}>
                                {tab.name}
                            </Button>
                        )
                        )}
                    </Toolbar>)
                }
            </AppBar>
            <Drawer anchor='left' open={drawer} onClose={event => toggleDrawer(event, false)} sx={{ px: 2 }}>
                <DropNav items={tabs} drawer_style={drawer_style} />
            </Drawer>
        </>
    )
}

export default Navbar