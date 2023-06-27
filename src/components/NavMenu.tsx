import { Toolbar, Stack } from '@mui/material'
import { CustomNavItem, CustomNavbar, CustomTitle, MainColor } from '../Styles'
import { Link } from 'react-router-dom'


export const NavMenu = () => {
    const stl = { 'fontSize': { 'xs': "10px", 'md': "20px" } }
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
                        sx={{ gap: { xs: "0px", md: "50px" } }}
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
                    </Stack>
                </Toolbar>
            </CustomNavbar>
        </>
    )
}