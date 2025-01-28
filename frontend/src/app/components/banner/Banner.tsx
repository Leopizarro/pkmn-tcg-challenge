import Image, { StaticImageData } from "next/image";
import { Box, Grid2, Typography } from "@mui/material";
import classes from './banner.module.css';
const Banner: React.FC<{
    staticImage: StaticImageData,
    bannerTitle: string
}> = (props) => {
    const { staticImage, bannerTitle } = props
    return (
        <Box className={classes.bannerContainer}>
            <Grid2 container className={classes.bannerContent}>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 5 }} justifyContent={{ xs:'center', sm: 'center', md:'center' }} className={classes.bannerImageContainer}>
                    <Box className={classes.imageContainer}>
                        <Image 
                        src={staticImage}
                        alt="tcg-app-logo" 
                        fill
                        style={{ 
                            borderRadius: '20px',
                            objectFit: 'cover',
                            border: '1px solid white'
                        }}
                        />
                    </Box>
                </Grid2>
                <Grid2 className={classes.bannerTitleContainer} size={{  xs: 12, sm: 12, md: 6, lg: 7, }} sx={{ marginTop: { xs: '40px', sm: '25px', md: '0px' }}}>
                    <Typography variant="h3" component='h1' sx={{ fontSize: { xs: '28px', sm: '38px', md: '46px' } }} className={classes.bannerTitle}>
                        {bannerTitle}
                    </Typography>
                </Grid2>
            </Grid2>
        </Box>
    );
}

export default Banner;
