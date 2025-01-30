import { CardInterface } from "@/app/interfaces/card.interface"
import { MarketInferface } from "@/app/interfaces/market.interface"
import { Box, Button, Grid2, Typography } from "@mui/material"
import classes from './card-description.module.css'
import CardDescriptionRow from "./CardDescriptionRow"

const CardDescription: React.FC<{cardInformation: CardInterface}> = (props) => {
    const { cardInformation } = props;
    return (
        <Box 
          height= '100%' 
          className={classes.boxContainer}
          maxWidth={950} 
          padding='10px'
        >
          <Grid2 
            container 
            size={12} 
            justifyContent='center'
            spacing={2}
          >
            <Grid2 container spacing={2}>
              <Grid2 size={12}>
                <Typography
                  align='center' 
                  component='h1' 
                  fontWeight='bold' 
                  fontSize={{xs: '2.1rem', md:'3.25rem'}}
                >
                  {cardInformation?.name}
                </Typography>
              </Grid2>
              <CardDescriptionRow 
                title='Nro. Carta' 
                value={cardInformation?.number}
              />
              <CardDescriptionRow 
                title='Supertipo' 
                value={cardInformation?.supertype}
              />
              <CardDescriptionRow
                title='Rareza' 
                value={cardInformation?.rarity}
              />
              {cardInformation?.subtypes?.length > 0 && 
              <CardDescriptionRow 
                title='Subtipo(s)' 
                value={cardInformation?.subtypes?.join(', ')} 
              />}
              {
              cardInformation?.types?.length > 0 &&
              <CardDescriptionRow 
                title='Tipo(s)' 
                value={cardInformation?.types?.join(', ')}
              />
              }
            </Grid2>
          </Grid2>
          <Grid2 
            container 
            size={12} 
            justifyContent='center' 
            margin='10px 0px' 
            spacing={2}
          >
            <Grid2 size={12}>
                <Typography 
                  align="center" 
                  fontWeight='bold' 
                  component='h4' 
                  variant="h4"
                  fontSize={{xs: '1.9rem', md:'2rem'}}
                >
                  Publicaciones Market
                </Typography>
            </Grid2>
            {
            cardInformation?.markets?.length > 0 && 
            cardInformation?.markets?.map((market: MarketInferface, index: number) => (
              <Grid2 
                container 
                size={12} 
                key={`market-${index}`} 
                alignContent='center' 
                justifyContent='center' 
                spacing={2} 
                margin='15px 0px'
              >
                <Grid2 
                  size={{ xs: 12, md:6 }} 
                  container 
                  justifyContent={{ xs: 'center', md: 'right' }}
                >
                  <Typography 
                    alignSelf='center' 
                    fontSize="1.4rem" 
                    fontWeight='bold'
                  >
                    {market?.market?.toUpperCase()+ ': '}
                  </Typography>
                </Grid2>
                <Grid2 
                  size={{ xs: 12, md:6 }} 
                  container justifyContent={{ xs: 'center', md: 'left' }}
                >
                  <Button 
                    href={market?.url} 
                    target='_blank' 
                    variant="contained" 
                    sx={{ background:'#ce3827' }}
                  >
                    VISITAR MARKET
                  </Button>
                </Grid2> 
              </Grid2>
            ))}
        </Grid2>
      </Box>
    )
}

export default CardDescription;