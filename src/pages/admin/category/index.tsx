import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import { CardContainer } from "../../../layouts/components/card-container";

export function CategoryPage() {
    return (
        <Grid container spacing={2}>
            <Grid
                item
                xs={12}
                md={4}
            >
                <CardContainer

                >
                    <Typography>
                        Category Title
                    </Typography>
                    <TextField
                        sx={{
                            marginTop: '12px'
                        }}
                        variant="standard"
                        fullWidth
                    />
                    <Box
                        sx={{
                            marginTop: '12px',
                            textAlign: 'right'
                        }}

                    >
                        <Button
                            variant="contained"
                            color="inherit"
                            sx={{
                                marginRight: '8px'
                            }}
                        >
                            Reset
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{
                                paddingLeft: '22px',
                                paddingRight: '22px',
                                width: '30%'
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </CardContainer>
            </Grid>
            <Grid
                item
                xs={12}
                md={8}
            >
                <CardContainer>
                    Table
                </CardContainer>
            </Grid>
        </Grid>
    )
}