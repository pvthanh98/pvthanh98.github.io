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
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';


export const MonthlyLimitationPage = () => {
    const [monthlyLimitData, setMonthlyLimitData] = useState<Array<MonthlyLimitationRow>>([]);
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const dispatch = useDispatch();
    useEffect(() => {
        getOverviewExpense();
    }, []);

    const getOverviewExpense = async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/monthly-limitation`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            if (response.data) {
                setMonthlyLimitData([...response.data])
            }
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
                    Monthly Limitation
                </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <MonthlyLimitationTableComponent rows={monthlyLimitData} />
            </Grid>     
        </Grid>
    )
}