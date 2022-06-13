import { useEffect, useState } from 'react';
import { TableComponent } from '../components/tables/overview-table';
import { OverviewRow } from '../interfaces/overview-row';
import { convertOverviewData } from '../utils/util';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress'
import { LinenearProgressLoading } from '../components/common/common-component';

export const OverviewPage = () => {
    const [usageData, setUsageData] = useState<Array<OverviewRow>>([]);
    const [remaining, setRemaining] = useState<Array<OverviewRow>>([]);
    const [income, setIncome] = useState<Array<OverviewRow>>([]);
    const [isLoad, setIsLoad] = useState<boolean>(true);

    useEffect(() => {
        getOverviewExpense();
    }, []);

    const getOverviewExpense = async () => {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/overview`);
        const { usage, income, remaining } = response.data;
        console.log(response.data)
        if (usage) {
            const data: Array<OverviewRow> = convertOverviewData(usage);
            setUsageData([...data])
        }

        if (remaining) {
            const data: Array<OverviewRow> = convertOverviewData(remaining);
            setRemaining([...data])
        }

        if (income) {
            const data: Array<OverviewRow> = convertOverviewData(income);
            setIncome([...data])
        }
        setIsLoad(false)
    }
    return (
        <Grid container spacing={2}>
            <LinenearProgressLoading isLoad={isLoad} />
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
    )
}