'use client'
import { CardInterface } from "@/app/interfaces/card.interface";
import { Grid2, ImageList, ImageListItem, SelectChangeEvent, TextField, Typography } from "@mui/material";
import classes from './card-list.module.css'
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import SelectInput from "../select-input/SelectInput";
import Link from "next/link";

const CardList: React.FC<{cards: CardInterface[], cardTypes: string[] | null, cardRarities: string[] | null}> = (props) => {
    const { cards, cardTypes, cardRarities } = props;
    const theme = useTheme();
    const [typeFilter, setTypeFilter] = useState<string>('');
    const [rarityFilter, setRarityFilter] = useState<string>('');
    const [nameFilter, setNameFilter] = useState<string>('');
    const [filteredCards, setFilteredCards] = useState<CardInterface[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isXs = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isLg = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
    const isXl = useMediaQuery(theme.breakpoints.up('xl'));

    const cols = isXl ? 5 : isLg ? 4 : isMd ? 3 : isSm ? 2 : isXs ? 1 : 1;

    const handleCardTypeChange = (event: SelectChangeEvent) => {
        setTypeFilter(event.target.value as string);
    };

    const handleCardRarityChange = (event: SelectChangeEvent) => {
        setRarityFilter(event.target.value as string);
    };

    useEffect(() => {
        setIsLoading(true);
        const filteredCards = cards.filter((card) => {
            // Checking rarity
            const matchesRarity = rarityFilter ? card.rarity === rarityFilter : true;
        
            // Checking name
            const matchesName = nameFilter
              ? card.name.toLowerCase().includes(nameFilter.toLowerCase())
              : true;
        
            // Checking types
            const matchesType = typeFilter
              ? card.types.includes(typeFilter)
              : true;
        
            return matchesRarity && matchesName && matchesType;
          });
          setFilteredCards(filteredCards)
          setIsLoading(false);
    }, [typeFilter, rarityFilter, nameFilter, cards]);

    return (
        <Grid2
            container 
            size={12} 
            maxWidth={1600}
        >
            <Grid2 
                container 
                className={classes.filtersContainer} 
                size={12} 
                justifyContent={{ sm: 'center', md: 'right' }} 
                spacing={2}
            >
                <Grid2 
                    className={classes.flex} 
                    size={{ xs: 12, sm: 4, md: 'auto' }} 
                    justifyContent={{ xs: 'center', sm: 'right', md: 'center' }}
                >
                    <TextField 
                        className={classes.nameFilter}
                        label="Nombre carta"
                        onChange={(e) => setNameFilter(e.target.value)}
                    />
                </Grid2>
                <Grid2 
                    className={classes.flex} 
                    size={{ xs: 12, sm: 4, md: 'auto' }} 
                    justifyContent='center'
                >
                    <SelectInput 
                        options={cardTypes}
                        handleOnChange={handleCardTypeChange}
                        value={typeFilter}
                        label="Tipo"
                        nullOptionLabel='Todos'
                    />
                </Grid2>
                <Grid2 
                    className={classes.flex} 
                    size={{ xs: 12, sm: 4, md: 'auto' }} 
                    justifyContent={{ xs: 'center', sm: 'left', md: 'center' }}
                >
                    <SelectInput 
                        options={cardRarities}
                        handleOnChange={handleCardRarityChange}
                        value={rarityFilter}
                        label="Rareza"
                        nullOptionLabel='Todas'
                    />
                </Grid2>
            </Grid2>
            {isLoading && <Loading message="Filtrando cartas..."/>}
            {!isLoading && 
            <ImageList 
                className={classes.fullWidth} 
                cols={cols} 
                rowHeight={360} 
                gap={5}
            >
                {filteredCards.map((card) => (
                    <Link 
                        href={`/card/${card?.id}`} 
                        passHref key={card?.id}
                    >
                        <ImageListItem 
                            className={`${classes.grow} ${classes.imageListItem}`}
                        >
                            <Image
                            src={card?.images[0]?.url}
                            alt="tcg-set-logo" 
                            fill
                            style={{
                                objectFit: 'contain',
                                }}
                            />
                        </ImageListItem>
                    </Link>
            ))}
            </ImageList>}
            {
                filteredCards?.length === 0 && 
                <Grid2 
                    container size={12} 
                    className={classes.cardsNotFound}
                >
                    <Typography 
                        className={classes.notFoundText} 
                        fontSize={20}
                    >
                        No se han encontrado cartas
                    </Typography>
                </Grid2>
            }
        </Grid2>
    )
}
export default CardList;