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
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';


export const ExpenseByCategoryPage = () => {
    const [dailyData, setDailyData] = useState<Array<CategoryExpenseRow>>([]);
    const [monthlyData, setMonthly] = useState<Array<CategoryExpenseRow>>([]);
    const [yearlyData, setYearly] = useState<Array<CategoryExpenseRow>>([]);
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const dispatch = useDispatch();

    useEffect(() => {
        getOverviewExpense();
    }, []);

    const getOverviewExpense = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/expense-by-category`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const { daily, monthly, yearly } = response.data;
            if (daily) {
                setDailyData([...daily])
            }
            if (monthly) {
                setMonthly([...monthly])
            }
            if (yearly) {
                setYearly([...yearly])
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
        <Grid container spacing={2}>
            <LinenearProgressLoading isLoad={isLoad} />
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
    )
}