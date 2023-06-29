import { Toolbar, Stack, Box } from '@mui/material'
import { CustomNavItem, CustomNavbar, CustomTitle, GetInButton, MainColor } from '../Styles'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const NavMenu = () => {
    const stl = { 'fontSize': { 'xs': "10px", 'md': "20px" } }
    const [nav, setNav] = useState<boolean>(false)
    return (
        <>
            <CustomNavbar>
                <Toolbar
                >
                    <CustomTitle
                        sx={{ flexGrow: 1 }}
                    >
                        <Link to={'/'} style={{ 'color': MainColor }}>
                            ხეთა
                        </Link>
                    </CustomTitle>
                    <Stack
                        display={'flex'}
                        alignItems={'center'}
                        sx={{
                            transition: "0.3s",
                            gap: { xs: "0px", md: "50px" },
                            flexDirection: { xs: "column", md: "row" },
                            position: { xs: "absolute", md: "static" },
                            left: "0",
                            padding: { xs: "10px", md: "0" },
                            width: { xs: "100%", md: "auto" },
                            top: `${nav ? "60px" : "-180px"}`,
                            background: { xs: "white", md: "transparent" }
                        }}
                        flexDirection={'row'}>
                        <Link to={'/'}>
                            <CustomNavItem sx={stl} className='nav-item-st'>მთავარი</CustomNavItem>
                        </Link>
                        <Link to={'/about'}>
                            <CustomNavItem sx={stl} className='nav-item-st'>ჩვენს შესახებ</CustomNavItem>
                        </Link>
                        <Link to={'/products'}>
                            <CustomNavItem sx={stl} className='nav-item-st'>პროდუქცია</CustomNavItem>
                        </Link>
                        <Link to={'/login'}>
                            <GetInButton sx={stl} className='nav-item-st-2'>შესვლა</GetInButton>
                        </Link>
                    </Stack>
                    <div onClick={() => setNav(!nav)}>
                        <Box color={MainColor} sx={{ display: { xs: "block", md: "none" } }}>
                            <MenuIcon />
                        </Box>
                    </div>
                </Toolbar>

            </CustomNavbar>
        </>
    )
}

const responsiveNavStyles = {
    position: {
        xs: "absolute",
        md: "static"
    },
}