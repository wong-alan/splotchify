import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import SplotchifyIcon from "../components/SplotchifyIcon";
import UserMenu from "../components/UserMenu";

const Header = () => {
    return (
        <AppBar position="static" sx={{ bgcolor: "#191414" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Large corner logo */}
                    <SplotchifyIcon sx={{
                        display: { xs: 'none', md: 'flex' }, mr: 1, width: 24, height: 24
                    }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            paddingLeft: '15px'
                        }}
                    >
                        Splotchify
                    </Typography>

                    {/* Small box */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    </Box>

                    {/* Small center logo */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Splotchify
                    </Typography>

                    {/* Large box; pushes user icon to right */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    </Box>

                    {/* User menu */}
                    <Box sx={{ flexGrow: 0 }}>
                        <UserMenu />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;