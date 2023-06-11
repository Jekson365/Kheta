import { Toolbar, Stack } from '@mui/material'
import { CustomNavItem, CustomNavbar, CustomTitle } from '../Styles'
import { Link } from 'react-router-dom'


export const NavMenu = () => {
    const stl = { 'fontSize': { 'xs': "13px", 'md': "20px" } }
    return (
        <>
            <CustomNavbar>
                <Toolbar>
                    <CustomTitle
                        sx={{ flexGrow: 1 }}
                    >
                        ხეთა
                    </CustomTitle>
                    <Stack
                        display={'flex'}
                        alignItems={'center'}
                        sx={{gap:{xs:"10px",md:"50px"}}}
                        flexDirection={'row'}>
                        <Link to={'/'}>
                            <CustomNavItem sx={stl}>მთავარი</CustomNavItem>
                        </Link>
                        <Link to={'/about'}>
                            <CustomNavItem sx={stl}>ჩვენს შესახებ</CustomNavItem>
                        </Link>
                        <Link to={'/products/all'}>
                            <CustomNavItem sx={stl}>პროდუქცია</CustomNavItem>
                        </Link>
                    </Stack>
                </Toolbar>
            </CustomNavbar>
        </>
    )
}