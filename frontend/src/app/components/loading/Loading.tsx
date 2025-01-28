import { CircularProgress, Grid2, Typography } from "@mui/material";
import classes from './loading.module.css';

const Loading: React.FC<{message: string}> = (props) => {
    const { message } = props;
    return (
        <>
            <Grid2 size={12} className={`${classes.container} ${classes.loadingMargin}`}>
                <CircularProgress className={classes.loadingIcon}/>
            </Grid2>
            <Grid2 size={12} className={`${classes.container} ${classes.loadingTextMargin}`}>
                <Typography className={classes.loadingText}>{message}</Typography>
            </Grid2>
        </>
    )
}

export default Loading;