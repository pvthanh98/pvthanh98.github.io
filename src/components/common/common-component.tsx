import { Grid, LinearProgress } from '@mui/material';
import NumberFormat from 'react-number-format';
import { CurrencyFormatInterface } from '../../interfaces/common-interface';

interface LinearProgressInterface {
    isLoad: boolean;
}

export const CurrencyFormat = (props: CurrencyFormatInterface) => {
    return <div style={{ color: props.color ? props.color : "red", fontWeight: "bold" }}>
        <NumberFormat
            value={props.value}
            displayType={'text'}
            thousandSeparator={true}
        /> {' '} {props.prefix}
    </div>
}

export const LinenearProgressLoading = (props: LinearProgressInterface) => {
    if (props.isLoad) return (
        <Grid item xs={12} md={12} sx={{marginBottom:"8px"}}>
            <LinearProgress />
        </Grid>
    )
    return <div></div>;
}