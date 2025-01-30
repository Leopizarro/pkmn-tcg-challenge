import { SetInterface } from "@/app/interfaces/set.interface";
import { Grid2, Typography } from "@mui/material";
import { use } from "react";

const SetList: React.FC<{setList: Promise<SetInterface[]>}>  = (props) => {
    const pkmnSets = use(props?.setList)
    return (
        <Grid2 container justifyContent='center' maxWidth='lg' justifySelf='center' gap={1} margin='10px'>
            <Grid2 size={12}>
                <Typography 
                    align="center" 
                    variant='h4' 
                    fontSize='1.8rem' 
                    fontWeight='bold' 
                    sx={{
                        textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'
                    }}
                >
                    POKÉMON SETS
                </Typography>
            </Grid2>
            <Grid2 container justifyContent='center' size={12}>
                {pkmnSets?.map((set, index) => (
                    <Typography 
                        key={index}
                        sx={{
                            background: 'linear-gradient(45deg,#ccc 4%,#fff 10%,#ccc 30%,#ddd 50%,#ccc 70%,#fff 80%,#ccc 95%)',
                            border: '1px solid black', 
                            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.4)',
                            borderRadius: '10px',
                            padding: '2px 4px',
                            margin: '4px 4px'
                        }} 
                        align="center" 
                        display='inline' 
                        fontSize='0.90rem' 
                        fontWeight='bolder'
                    >
                        {set?.name}
                    </Typography>
                ))}
            </Grid2>
        </Grid2>
    );
}

export default SetList;

