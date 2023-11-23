import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Tab, Tabs} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import "./header.css"
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    function navTabs() {

        return (
            <Tabs value={location.pathname}>
                <Tab label="Presentation" value="/" to="/" component={Link}/>
                <Tab label="Portfolio" value="/portfolio" to="/portfolio" component={Link}/>
                <Tab label="Contact me" value="/contact-me" to="/contact-me" component={Link}/>
            </Tabs>
        );
    }

    function drawerTabs() {
        return (
            <Tabs value={location.pathname} orientation="vertical">
                <Tab label="Presentation" value="/" to="/" component={Link}/>
                <Tab label="Portfolio" value="/portfolio" to="/portfolio" component={Link}/>
                <Tab label="Contact me" value="/contact-me" to="/contact-me" component={Link}/>
            </Tabs>
        );
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Hugo BATT
            </Typography>
            <Divider />
            {drawerTabs()}
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className="appbar" component="nav" position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
                <Toolbar style={{ background: 'transparent', boxShadow: 'none'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Hugo BATT
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navTabs()}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}