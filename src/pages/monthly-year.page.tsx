import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { MonthByYearRow } from '../interfaces/month-by-year';
import { MonthByYearTableComponent } from '../components/tables/month-by-year-table';
import { LinenearProgressLoading } from '../components/common/common-component';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';


export const YearMonthlyPage = () => {
    const [monthsData, setMonthsData] = useState<Array<MonthByYearRow>>([]);
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const dispatch = useDispatch();

    useEffect(() => {
        getOverviewExpense();
    }, []);

    const getOverviewExpense = async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/expense-by-month`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            setMonthsData([...response.data])
            setIsLoad(false)
        } catch (e: any) {
            console.log(e)
            if (e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            setIsLoad(false)
        }
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