import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";
import CardDescription from "../../components/card-details/CardDescription";
import classes from './page.module.css';
import { Metadata } from "next/types";
import { CardInterface } from "@/app/interfaces/card.interface";
 
export async function generateMetadata(
  { params }: {
    params: Promise<{ id: string }>
  },
): Promise<Metadata> {
 
  const cardIdToSearch = (await params).id

  const data = await fetch(`${process.env.SERVER_BACKEND_URL}/cards/${cardIdToSearch}/`).then((res) => res.json())
  const card = data?.card as CardInterface
 
  return {
    title: `${card?.name} - Microsystem's PKMN Challenge`,
    openGraph: {
      images: [card?.images[0].url],
    },
  }
}

const CardDetails:React.FC<{params: Promise<{ id: string }>}> = async (props) => {
  let cardNotFound: boolean = false;
  const { params } = props;
  const cardIdToSearch = (await params).id
  const data = await fetch(`${process.env.SERVER_BACKEND_URL}/cards/${cardIdToSearch}/`)
  if (data?.status !== 200) {
    cardNotFound = true;
  }
  const cardInformation = await data.json()
  return (
    <>
      { !cardNotFound &&
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
                src={cardInformation?.card?.images[1]?.url}
                alt="card-image" 
                fill
                style={{
                    objectFit: 'contain',
                  }}
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <CardDescription cardInformation={cardInformation?.card} />
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