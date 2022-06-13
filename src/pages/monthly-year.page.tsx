import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { MonthByYearRow } from '../interfaces/month-by-year';
import { MonthByYearTableComponent } from '../components/tables/month-by-year-table';
import { LinenearProgressLoading } from '../components/common/common-component';

export const YearMonthlyPage = () => {
    const [monthsData, setMonthsData] = useState<Array<MonthByYearRow>>([]);
    const [isLoad, setIsLoad] = useState<boolean>(true);

    useEffect(() => {
        getOverviewExpense();
    }, []);

    const getOverviewExpense = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/expense-by-month`);
        setMonthsData([...response.data])
        setIsLoad(false)
    }
    return (
        <Grid container spacing={2}>
            <LinenearProgressLoading isLoad={isLoad} />
            <Grid item xs={12} md={12}>
                <Typography variant="h5" style={{ fontWeight: "bold", marginTop: "8px" }}>
                    Year By Month
                </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <Typography variant="h6" style={{ marginTop: "8px" }}>
                    Month
                </Typography>
                <MonthByYearTableComponent rows={monthsData} />
            </Grid>
        </Grid>
    )
}