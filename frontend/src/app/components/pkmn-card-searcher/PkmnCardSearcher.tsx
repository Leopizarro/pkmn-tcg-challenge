'use client'
import { SetInterface } from "@/app/interfaces/set.interface";
import { Autocomplete, Box, Grid2, TextField, Typography } from "@mui/material";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../loading/Loading";
import CardList from "../card-list/CardList";
import { CardInterface } from "@/app/interfaces/card.interface";
import classes from './pkmn-card-searcher.module.css';


const PkmnCardSearcher: React.FC<{ options: Promise<SetInterface[]> }> = (props) => {
    const options = use(props.options);
    const [value, setValue] = useState<SetInterface | null>(null);
    const [cardsData, setCardsData] = useState<CardInterface[] | null>(null);
    const [cardTypes, setCardTypes] = useState<string[] | null>(null);
    const [cardRarities, setCardRarities] = useState<string[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const fetchSetsCards = async (setId: string) => {
        setIsError(false);
        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_BACKEND_URL}/sets/${setId}/cards`);
            const data = await response.json();
            setCardsData(data?.cards);
            setCardTypes(data?.cardTypes)
            setCardRarities(data?.rarities)
            setIsLoading(false);
        } catch(error) {
            console.log(error)
            setIsError(true);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (value?.id) {
            fetchSetsCards(value.id)
        }
    }, [value])

    return (
        <Grid2 container size={12} className={classes.searcherContainer}>
            <Grid2 size={12} className={classes.autocompleteContainer}>
                <Autocomplete
                    disablePortal
                    options={options}
                    getOptionLabel={(option) => option?.name}
                    onChange={(event, newValue) => setValue(newValue)}
                    className={classes.autocomplete}
                    renderInput={(params) => <TextField {...params} slotProps={{
                        inputLabel: {className:
                        classes.autocompleteInput
                        ,
                    }}}
                        label="Selecciona un Set" />}
                />
            </Grid2>
            {isLoading && !isError &&
                <Loading message="Cargando Cartas..." />
            }
            {value && !isLoading && !isError &&
            <Grid2 size={12} className={classes.setLogoContainer}>
                <Box className={classes.setLogoBox}>
                    <Image 
                    src={value?.logoUrl}
                    alt="tcg-set-logo" 
                    fill
                    style={{
                        objectFit: 'contain',
                      }}
                    />
                </Box>
            </Grid2>}
            {cardsData && !isLoading && value && <CardList cards={cardsData} cardTypes={cardTypes} cardRarities={cardRarities}/>}
            {isError && !isLoading && value && 
            <Grid2
            container
            spacing={0}
            className={classes.notFoundContainer}
          >
          <Grid2 size={8}>
            <Typography 
              align='center' 
              variant='h5'
              fontWeight='bold'
            >
              Ha ocurrido un error obteniendo las cartas del set
            </Typography>
          </Grid2>
        </Grid2>}
        </Grid2>
    )
}

export default PkmnCardSearcher;