import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { MonthByYearTableComponent } from '../components/tables/month-by-year-table';
import { LinenearProgressLoading } from '../components/common/common-component';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';
import { RootState } from '../redux/store';
import { updateMonthByYearAaction } from '../redux/actions/month-by-year-expense.action';
import { Container } from '@mui/system';
import { NavComponent } from '../components/common/nav/nav';


export const YearMonthlyPage = () => {
    const monthsData = useSelector((state: RootState) => state.monthByYear.value)
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (monthsData.length === 0) {
            getOverviewExpense();
        }
    }, []);

    const getOverviewExpense = async () => {
        try {
            setIsLoad(true)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/expense-by-month`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            dispatch(updateMonthByYearAaction([...response.data]))
            setIsLoad(false)
        } catch (e: any) {
            if (e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            setIsLoad(false)
        }
    }
    return (
        <Container>
            <Grid item xs={12} md={12}>
                <LinenearProgressLoading isLoad={isLoad} />
                <NavComponent />
            </Grid>
            <Grid container spacing={2}>
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
        </Container>
    )
}