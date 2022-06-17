import { useEffect, useState } from 'react';
import { TableComponent } from '../components/tables/overview-table';
import { OverviewRow } from '../interfaces/overview-row';
import { convertCategoryExpenseData, convertOverviewData } from '../utils/util';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { CategoryExpenseTableComponent } from '../components/tables/category-expense-table';
import { CategoryExpenseRow } from '../interfaces/category-expense-row';
import { LinenearProgressLoading } from '../components/common/common-component';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';
import { RootState } from '../redux/store';
import { fetchDailyData, fetchMonthlyData, fetchYearlyData } from '../redux/actions/category-expense.action';
import { Container } from '@mui/system';
import { NavComponent } from '../components/common/nav/nav';


export const ExpenseByCategoryPage = () => {
    const dailyData = useSelector((state: RootState) => state.categoryExpense.daily);
    const monthlyData = useSelector((state: RootState) => state.categoryExpense.monthly);
    const yearlyData = useSelector((state: RootState) => state.categoryExpense.yearly);

    const [isLoad, setIsLoad] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dailyData.length === 0 || monthlyData.length === 0 || yearlyData.length === 0) {
            getOverviewExpense();
        }
    }, []);

    const getOverviewExpense = async () => {
        try {
            setIsLoad(true);
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/expense-by-category`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const { daily, monthly, yearly } = response.data;
            if (daily) {
                dispatch(fetchDailyData([...daily]))
            }
            if (monthly) {
                dispatch(fetchMonthlyData([...monthly]))
            }
            if (yearly) {
                dispatch(fetchYearlyData([...yearly]))
            }
            setIsLoad(false)
        } catch (e: any) {
            if (e.response && e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            setIsLoad(false)
        }

    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <LinenearProgressLoading isLoad={isLoad} />
                    <h3>ThanhPhan</h3>
                    <NavComponent />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" style={{ fontWeight: "bold", marginTop: "8px" }}>
                        Category Expenses
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" style={{ marginTop: "8px" }}>
                        Daily
                    </Typography>
                    <CategoryExpenseTableComponent rows={dailyData} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" style={{ marginTop: "8px" }}>
                        Monthly
                    </Typography>
                    <CategoryExpenseTableComponent rows={monthlyData} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" style={{ marginTop: "8px" }}>
                        Yearly
                    </Typography>
                    <CategoryExpenseTableComponent rows={yearlyData} />
                </Grid>

            </Grid>
        </Container>
    )
}