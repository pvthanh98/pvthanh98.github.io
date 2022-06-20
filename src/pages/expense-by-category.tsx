import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { CategoryExpenseTableComponent } from '../components/tables/category-expense-table';
import { LinenearProgressLoading } from '../components/common/common-component';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../redux/actions/auth.action';
import { RootState } from '../redux/store';
import { fetchDailyData, fetchMonthlyData, fetchYearlyData } from '../redux/actions/category-expense.action';
import { Container } from '@mui/system';
import { NavComponent } from '../components/common/nav/nav';
import { DailyExpenseTableComponent } from '../components/tables/daily-expense-table';
import { DailyExpenseRow } from '../interfaces/daily-expense-row';
import { Box, CircularProgress, MenuItem, Select } from '@mui/material';
import { ExpenseCategoryHttp } from '../constants/expense-category-http';


export const ExpenseByCategoryPage = () => {
    const dailyData = useSelector((state: RootState) => state.categoryExpense.daily);
    const monthlyData = useSelector((state: RootState) => state.categoryExpense.monthly);
    const yearlyData = useSelector((state: RootState) => state.categoryExpense.yearly);

    const [expenseByCategory, setExpenseByCategory] = useState<Array<DailyExpenseRow>>([]);
    const [selectedCategory, setSelectedCategory] = useState(ExpenseCategoryHttp.FOOD.value)
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [isCategoryLoad, setCategoryLoad] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dailyData.length === 0 || monthlyData.length === 0 || yearlyData.length === 0) {
            getOverviewExpense();
        }
        loadExpenseByCategory(selectedCategory)
    }, []);

    const loadExpenseByCategory = async (category:string) => {
        try {
            setCategoryLoad(true);
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/expense-by-category-by/${category}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            setExpenseByCategory(response.data.data);
            
            setCategoryLoad(false)
        } catch (e: any) {
            if (e.response && e.response.status === 401) {
                dispatch(setAuth(false));
                localStorage.removeItem("accessToken");
            }
            setCategoryLoad(false)
        }
    }

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
            if (e.response.status === 403) {
                alert("Permission denied")
            }
            setIsLoad(false)
        }

    }

    const onSelectChange = (e: any) => {
        setSelectedCategory(e.target.value)
        loadExpenseByCategory(e.target.value)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <LinenearProgressLoading isLoad={isLoad} />
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
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" style={{ marginTop: "8px" }}>
                        Expense By {' '}
                        <Select
                            value={selectedCategory}
                            size="small"
                            sx={{
                                color:"green"
                            }}
                            onChange={onSelectChange}
                        >
                            <MenuItem value={ExpenseCategoryHttp.FOOD.value}>{ExpenseCategoryHttp.FOOD.title}</MenuItem>
                            <MenuItem value={ExpenseCategoryHttp.PETROL.value}>{ExpenseCategoryHttp.PETROL.title}</MenuItem>
                            <MenuItem value={ExpenseCategoryHttp.ENTERTAINMENT.value}>{ExpenseCategoryHttp.ENTERTAINMENT.title}</MenuItem>
                            <MenuItem value={ExpenseCategoryHttp.PARTY.value}>{ExpenseCategoryHttp.PARTY.title}</MenuItem>
                            <MenuItem value={ExpenseCategoryHttp.GIVING.value}>{ExpenseCategoryHttp.GIVING.title}</MenuItem>
                            <MenuItem value={ExpenseCategoryHttp.RENTAL_FEE.value}>{ExpenseCategoryHttp.RENTAL_FEE.title}</MenuItem>
                            <MenuItem value={ExpenseCategoryHttp.SHOPPING.value}>{ExpenseCategoryHttp.SHOPPING.title}</MenuItem>
                            <MenuItem value={ExpenseCategoryHttp.OTHERS.value}>{ExpenseCategoryHttp.OTHERS.title}</MenuItem>
                        </Select>
                    </Typography>
                    <Box
                        sx={{display:"flex",justifyContent:"center", marginTop:"8px"}}
                    >
                        {isCategoryLoad && <CircularProgress color="inherit" />}
                    </Box>
                    <DailyExpenseTableComponent rows={expenseByCategory} editRows={[]} />
                   
                </Grid>
            </Grid>
        </Container>
    )
}