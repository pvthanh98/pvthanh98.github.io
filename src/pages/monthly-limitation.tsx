import { useEffect, useState } from 'react';
import { TableComponent } from '../components/tables/overview-table';
import { OverviewRow } from '../interfaces/overview-row';
import { convertCategoryExpenseData, convertOverviewData } from '../utils/util';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { CategoryExpenseTableComponent } from '../components/tables/category-expense-table';
import { CategoryExpenseRow } from '../interfaces/category-expense-row';
import { MonthlyLimitationTableComponent } from '../components/tables/monthly-limitation-table';
import { MonthlyLimitationRow } from '../interfaces/monthly-limitation-row';
import { LinenearProgressLoading } from '../components/common/common-component';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';
import { RootState } from '../redux/store';
import { fetchMonthlyLimitData } from '../redux/actions/monthly-limitation-expense.action';
import { Container } from '@mui/system';
import { NavComponent } from '../components/common/nav/nav';


export const MonthlyLimitationPage = () => {
    const monthlyLimitData = useSelector((state: RootState) => state.monthlyLimitReducer.value)
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (monthlyLimitData.length === 0) {
            getOverviewExpense();
        }
    }, []);

    const getOverviewExpense = async () => {
        try {
            setIsLoad(true)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/monthly-limitation`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            if (response.data) {
                dispatch(fetchMonthlyLimitData([...response.data]))
            }
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
                <h3>ThanhPhan</h3>
                <NavComponent />
            </Grid>
            <Grid container spacing={2}> 
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" style={{ fontWeight: "bold", marginTop: "8px" }}>
                        Monthly Limitation
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <MonthlyLimitationTableComponent rows={monthlyLimitData} />
                </Grid>
            </Grid>
        </Container>
    )
}