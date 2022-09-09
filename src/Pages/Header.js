import React from 'react'
import {
    AppBar, Button,
    Stack, Link,
    Toolbar, Typography
} from '@mui/material'
import LogoAkil from '../Images/LogoAkil.png'
import Services from '../Components/Service'
import Abouts from '../Components/Abouts'


export default function Header() {
    return (
        <div>
            <AppBar sx={{ boxShadow: 'none', backgroundColor: 'white' }} >
                <Toolbar sx={{ flexWrap: 'Wrap' }}>
                    <Stack sx={{width: '170px', height: 'auto', margin: 'auto'}}>
                    <img src={LogoAkil} alt="" />
                    </Stack>
                    <Stack direction="row" spacing={3} sx={{ margin: "auto", color: '#707070' }}>
                        <Typography sx={{ fontSize: '14px', fontFamily: 'orelega-one', textTransform: 'titlecase', cursor: "default" }}> Acceuil</Typography>
                        <Typography sx={{ fontFamily: 'orelega-one', textTransform: 'titlecase', cursor: "pointer", fontSize: '10px'}}><Abouts /></Typography>
                        <Typography sx={{ fontFamily: 'orelega-one', textTransform: 'titlecase', cursor: "pointer" }}><Services /></Typography>
                        <Typography sx={{ fontSize: '14px', fontFamily: 'orelega-one', textTransform: 'titlecase'}}><Link href="#" underline="none" color="#707070">Nos Methodologies</Link></Typography>
                        <Typography sx={{ fontSize: '14px', fontFamily: 'orelega-one', textTransform: 'titlecase' }}><Link href="#" underline="none" color="#707070">Activites</Link></Typography>
                    </Stack>
                    <Stack direction="row" spacing={5} sx={{ margin: "auto" }}>
                        <Button variant="contained" sx={
                            {
                                backgroundColor: "#003168", color: "white",
                                fontFamily: 'orelega-one', textTransform: 'lowercase', fontWeight:'bold',
                                marginRight: '200px', width: '100%', "&:hover": {backgroundColor: "#003168"}
                            }
                        }>Contactez- Nous</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
    )
}