import { Grid2, Typography } from "@mui/material";

const CardDescriptionRow: React.FC<{title: string, value: string}> = (props) => {
    const {title, value} = props;
    return (
        <Grid2 container size={12} spacing={2}>
                <Grid2 size={6}>
                  <Typography 
                    fontWeight='bold' 
                    justifyContent='center' 
                    justifySelf='right' 
                    fontSize='1.4rem'
                  >
                    {title}:
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography 
                    justifySelf='left' 
                    fontSize='1.4rem'
                  >
                    {value}
                  </Typography>
                </Grid2>
              </Grid2>
    )
}

export default CardDescriptionRow;