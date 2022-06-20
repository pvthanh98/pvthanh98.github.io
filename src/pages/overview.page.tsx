import { useEffect, useState } from 'react';
import { TableComponent } from '../components/tables/overview-table';
import { OverviewRow } from '../interfaces/overview-row';
import { convertOverviewData } from '../utils/util';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LinenearProgressLoading } from '../components/common/common-component';
import { setAuth } from '../redux/actions/auth.action';
import { RootState } from '../redux/store';
import { fetchIncomeData, fetchRemainingData, fetchUsageData } from '../redux/actions/overview-expense.action';
import { Container } from '@mui/system';
import { NavComponent } from '../components/common/nav/nav';

export const OverviewPage = () => {

    const usageData = useSelector((state: RootState) => state.overviewExpense.usage);
    const remaining = useSelector((state: RootState) => state.overviewExpense.remaining);
    const income = useSelector((state: RootState) => state.overviewExpense.income);

    const [isLoad, setIsLoad] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (usageData.length === 0 || remaining.length === 0 || income.length === 0) {
            getOverviewExpense();
        }
    }, []);

    const getOverviewExpense = async () => {
        try {
            setIsLoad(true)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/overview`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
            const { usage, income, remaining } = response.data;
            if (usage) {
                const data: Array<OverviewRow> = convertOverviewData(usage);
                dispatch(fetchUsageData(data))
            }

            if (remaining) {
                const data: Array<OverviewRow> = convertOverviewData(remaining);
                dispatch(fetchRemainingData(data))
            }

            if (income) {
                const data: Array<OverviewRow> = convertOverviewData(income);
                dispatch(fetchIncomeData(data))
            }
            setIsLoad(false)
        } catch (e: any) {
            if (e.response.status === 401) {
                dispatch(setAuth(false))
                localStorage.removeItem("accessToken");
            }
            if (e.response.status === 403) {
                alert("Permission denied")
            }
            setIsLoad(false)
        }
    }
    return (
        <Container>
            <Grid item xs={12} md={12}>
                <LinenearProgressLoading isLoad={isLoad} />
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h5" style={{ fontWeight: "bold", marginTop: "8px" }}>
                        Overview
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" style={{ marginTop: "8px" }}>
                        Usage
                    </Typography>
                    <TableComponent rows={usageData} />

                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" style={{ marginTop: "8px" }}>
                        Income
                    </Typography>
                    <TableComponent rows={income} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" style={{ marginTop: "8px" }}>
                        Remaining
                    </Typography>
                    <TableComponent rows={remaining} />
                </Grid>
            </Grid>
        </Container>
    )
}