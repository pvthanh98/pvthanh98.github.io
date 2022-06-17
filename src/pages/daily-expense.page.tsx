import { useEffect, useRef, useState } from 'react';
import { DailyExpenseRow } from '../interfaces/daily-expense-row';
import { DailyExpenseTableComponent } from '../components/tables/daily-expense-table';
import { LinenearProgressLoading } from '../components/common/common-component';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { Button, Input, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { clearAddExpenseData, updateAddDataAction, updateDataAction } from '../redux/actions/daily-expense.action';
import { setAuth } from '../redux/actions/auth.action';
import { Container } from '@mui/system';
import { NavComponent } from '../components/common/nav/nav';

const moment = require("moment")

export const DailyExpensePage = () => {
    const inputSelectCategoryRef = useRef(null);
    const dailyExpense = useSelector((state: RootState) => state.dailyExpense);
    const dailyExpenseAddData = useSelector((state: RootState) => state.dailyExpenseAddData);
    const dispatch = useDispatch();
    const [isLoad, setIsLoad] = useState<boolean>(false);
    const [dateInput, setDateInput] = useState<String>(moment(new Date()).format("YYYY-MM-DD"));
    const [descriptionInput, setdescriptionInput] = useState<String>('');
    const [amountInput, setAmountInput] = useState<Number>(0);
    const [categoryInput, setcategoryInput] = useState('Food & Drink');

    useEffect(() => {
        if (dailyExpense && dailyExpense.value && dailyExpense.value.length <= 0) {
            // Cache data
            getOverviewExpense();
        }
    }, []);

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setcategoryInput(event.target.value as string);
    };

    const resetInput = () => {
        setAmountInput(0);
        setcategoryInput('Food & Drink');
        setdescriptionInput('')
    }

    const onAddExpense = async (e: any) => {
        e.preventDefault();
        try {

            if (amountInput <= 0) {
                alert("Amount cannot less than or equal 0");
                return
            }

            if (descriptionInput == '') {
                alert("Desciption required");
                return
            }
            const data = {
                category: categoryInput,
                amount: amountInput,
                description: descriptionInput,
                date: dateInput
            } as DailyExpenseRow;
            dispatch(updateAddDataAction(data));
            clearInput();
        } catch (e: any) {
            alert(e.message);
        }
    }



    const saveExpense = async () => {
        try {
            setIsLoad(true)
            await axios.post(`${process.env.REACT_APP_SERVER_HOST}/dashboard/expense-daily`, {
                expenses: dailyExpenseAddData.value
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            dispatch(clearAddExpenseData())
            getOverviewExpense();
            resetInput();
        } catch (e: any) {
            if (e.response.status === 401) {
                localStorage.removeItem("accessToken");
                dispatch(setAuth(false))
            }
            setIsLoad(false)
        }
    }

    const getOverviewExpense = async () => {
        try {
            setIsLoad(true)
            const response = await axios.get(`${process.env.REACT_APP_SERVER_HOST}/dashboard/expense-daily`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            dispatch(updateDataAction([...response.data]))
            setIsLoad(false);
        } catch (e: any) {
            if (e.response.status === 401) {
                localStorage.removeItem("accessToken");
                dispatch(setAuth(false))
            }
            setIsLoad(false)
        }
    }

    const onDateInputChange = (e: any) => {
        setDateInput(e.target.value)
    }

    const onAmountChange = (e: any) => {
        setAmountInput(parseInt(e.target.value))
    }

    const onDescriptionChange = (e: any) => {
        setdescriptionInput(e.target.value)
    }

    const clearInput = () => {
        setAmountInput(0);
        setdescriptionInput("");
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
                        Daily Expense
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>

                    <DailyExpenseTableComponent rows={dailyExpense.value || []} editRows={dailyExpenseAddData.value || []} />
                    {
                        dailyExpenseAddData.value.length > 0 &&
                        <div style={{
                            textAlign: "right"
                        }}>
                            <Button style={{
                                marginTop: "4px",
                                marginRight: "4px"
                            }} onClick={() => dispatch(clearAddExpenseData())} variant="contained" color="inherit" endIcon={<RestartAltIcon />}>
                                CANCEL
                            </Button>
                            <Button style={{
                                marginTop: "4px"
                            }} onClick={saveExpense} variant="contained" color="success" endIcon={<AddIcon />}>
                                SAVE
                            </Button>
                        </div>
                    }
                </Grid>
                <Grid item xs={12} md={4}>
                    <form onSubmit={onAddExpense}>
                        <Typography variant='body1' style={{
                            marginTop: "10px",
                        }}>
                            Date
                        </Typography>
                        <Input
                            placeholder="Date"
                            type="date"
                            defaultValue={dateInput}
                            onChange={onDateInputChange}
                            style={{
                                width: "100%",
                            }}
                        />
                        <Typography variant='body1' style={{
                            marginTop: "10px",
                        }}>
                            Category
                        </Typography>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categoryInput}
                            label="Age"
                            onChange={handleCategoryChange}
                            style={{
                                width: "100%",
                                height: "50px"
                            }}
                            ref={inputSelectCategoryRef}
                        >
                            <MenuItem value={'Food & Drink'}>Food & Drink</MenuItem>
                            <MenuItem value={'Petrol'}>Petrol</MenuItem>
                            <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
                            <MenuItem value={'Party'}>Party</MenuItem>
                            <MenuItem value={'Giving'}>Giving</MenuItem>
                            <MenuItem value={'Rental fee'}>Rental fee</MenuItem>
                            <MenuItem value={'Shopping'}>Shopping</MenuItem>
                            <MenuItem value={'Others'}>Others</MenuItem>
                        </Select>
                        <Typography variant='body1' style={{
                            marginTop: "10px",
                        }}>
                            Description
                        </Typography>
                        <TextField
                            variant="outlined" color="success"
                            onChange={onDescriptionChange}
                            style={{
                                width: "100%",
                            }}
                            value={descriptionInput}
                        />
                        <Typography variant='body1' style={{
                            marginTop: "10px",
                        }}>
                            Amount
                        </Typography>
                        <Input
                            type="number"
                            onChange={onAmountChange}
                            value={amountInput}
                            style={{
                                width: "100%",
                                color: "red",
                                fontWeight: "bold"
                            }}
                        />
                        <div style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                            marginTop: "8px"
                        }}>
                            <Button type="submit" variant="contained" style={{ marginLeft: "4px" }} endIcon={<AddIcon />}>
                                Add
                            </Button>
                            <Button variant="outlined" style={{ marginLeft: "4px" }} startIcon={<RestartAltIcon />}>
                                Reset
                            </Button>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </Container>
    )
}