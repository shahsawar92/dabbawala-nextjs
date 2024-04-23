'use client'
import Grid from '@mui/material/Grid'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Table from 'src/views/dashboard/Table'
import Button from '@mui/material/Button'
import Link from 'next/link'


const Dashboard = () => {
    return (
        <ApexChartWrapper>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Grid container spacing={6} sx={
                        {
                            display: "flex",
                            justifyContent: "flex-end",
                            marginBottom: "20px"

                        }
                    }>

                        <Link
                            href="/add-food"
                            passHref
                        >
                            <Button size='md' type='submit' variant='contained' sx={{ marginBottom: 7 }}>
                                Add Food
                            </Button>
                        </Link>

                    </Grid>
                    <Table />
                </Grid>
            </Grid>
        </ApexChartWrapper >
    )
}

export default Dashboard
