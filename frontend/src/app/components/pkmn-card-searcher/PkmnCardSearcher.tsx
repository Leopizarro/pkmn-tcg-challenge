'use client'
import { SetInterface } from "@/app/interfaces/set.interface";
import { Autocomplete, Box, Grid2, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "../loading/Loading";
import CardList from "../card-list/CardList";
import { CardInterface } from "@/app/interfaces/card.interface";
import classes from './pkmn-card-searcher.module.css';


const PkmnCardSearcher: React.FC<{ options: SetInterface[] }> = (props) => {
    const { options } = props;
    const [value, setValue] = useState<SetInterface | null>(null);
    const [cardsData, setCardsData] = useState<CardInterface[] | null>(null);
    const [cardTypes, setCardTypes] = useState<string[] | null>(null);
    const [cardRarities, setCardRarities] = useState<string[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchSetsCards = async (setId: string) => {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/sets/${setId}/cards`);
        const data = await response.json();
        setCardsData(data?.cards);
        setCardTypes(data?.cardTypes)
        setCardRarities(data?.rarities)
        setIsLoading(false);
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
            {isLoading &&
                <Loading message="Cargando Cartas..." />
            }
            {value && !isLoading &&
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
        </Grid2>
    )
}

export default PkmnCardSearcher;