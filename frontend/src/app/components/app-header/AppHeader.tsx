import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import tcgLogo from '../../../../public/tcg-icon.png'
import classes from './appheader.module.css';
import React from "react";
import Link from "next/link";

const AppHeader: React.FC = () => {
    return (
      <AppBar 
        className={classes.appbar}
        sx={{background: 'linear-gradient(0deg,rgb(233, 118, 106) 0%,rgb(214, 64, 47) 45%, #ce3827)'}}
      >
        <Container maxWidth='xl'>
          <Toolbar className={classes.toolbar}>
              <Link href="/" passHref>
                <Box className={classes.box}>
                  <Image 
                    src={tcgLogo}
                    alt="tcg-app-logo" 
                    width={42} 
                    height={42}
                  />
                </Box>
              </Link>
              <Typography variant="h6" alignSelf='center'>
                POKÉMON TCG CARDS
              </Typography>
          </Toolbar>
      </Container>
    </AppBar>
      );
}

export default AppHeader;