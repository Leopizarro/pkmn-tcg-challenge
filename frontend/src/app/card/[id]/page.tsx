import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import CardDescription from "../../components/card-details/CardDescription";
import classes from './page.module.css';
import { Metadata } from "next/types";
import { getCardById } from "@/app/actions";
 
export async function generateMetadata(
  { params }: {
    params: Promise<{ id: string }>
  },
): Promise<Metadata> {
 
  const cardIdToSearch = (await params).id
  const card = await getCardById(cardIdToSearch);
 
  return {
    title: `${card ? card?.name : 'No encontrado'} - Microsystem's PKMN Challenge`,
    openGraph: {
      images: [card ? card?.images[0].url : ''],
    },
  }
}

const CardDetails:React.FC<{params: Promise<{ id: string }>}> = async (props) => {
  let cardNotFound: boolean = false;
  const { params } = props;
  const cardIdToSearch = (await params).id
  const cardInformation = await getCardById(cardIdToSearch);
  if (!cardInformation) {
    cardNotFound = true;
  }
  return (
    <>
      { !cardNotFound && cardInformation &&
      <Grid2 
        container 
        size={12} 
        spacing={2}
        sx={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <Grid2 
          container 
          size={12} 
          padding={{ xs: '2vh 3vw', md:'5vh 2vw' }}
        >
          <Grid2 size={{ xs: 12, md: 'grow' }}>
            <Box 
              className={classes.imageContainer} 
              height={{ xs: '500px', md: '100%' }}
            >
              <Image 
                src={cardInformation?.images[1]?.url}
                alt="card-image" 
                fill
                style={{
                    objectFit: 'contain',
                  }}
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <CardDescription cardInformation={cardInformation} />
          </Grid2>
        </Grid2>
      </Grid2>
      }
      {cardNotFound &&
        <Grid2
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: 'calc(100vh - 64px)' }}
        >
        <Grid2 size={8}>
          <Typography 
            align='center' 
            variant='h3'
          >
            Carta no encontrada :(
          </Typography>
        </Grid2>
      </Grid2>
      }
    </>
  );
}

export default CardDetails;