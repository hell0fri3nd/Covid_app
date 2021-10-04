import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {
    TreeDataState, SortingState, FilteringState, PagingState,
    IntegratedFiltering, IntegratedPaging, IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table, TableHeaderRow, TableFilterRow,
    PagingPanel, Toolbar, TableColumnVisibility, ColumnChooser,
} from '@devexpress/dx-react-grid-material-ui';
import {getAll} from "../api/DataGetters";
import CircularProgress from "@material-ui/core/CircularProgress";


export default function TablePage() {

    const [tableData, setTableData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [columns] = useState([
        {name: 'date', title: 'Date'},
        {name: 'location', title: 'Country'},
        {name: 'totalCases', title: 'Total Cases'},
        {name: 'newCases', title: 'New Cases'},
        {name: 'totalDeaths', title: 'Total Deaths'},
        {name: 'newDeaths', title: 'New Deaths'}
    ]);
    const [pageSizes] = useState([5, 10, 20]);
    const [defaultHiddenColumnNames] = useState(['newCases', 'newDeaths']);

    useEffect(() => {
        getAll().then(r => setTableData(r.data._embedded.csvEntries)).then(() => setLoaded(true))
            .then(() => console.log("INSIDE:" + tableData))
    }, [])


    if (loaded) {
        console.log(tableData)
        return (
            <div>
                <Typography align={"center"}>
                    <h1>Data in a customizable Table</h1>
                </Typography>
                <Typography paragraph>
                    <Paper>
                        <Grid
                            rows={tableData}
                            columns={columns}
                        >
                            <TreeDataState/>
                            <FilteringState/>
                            <SortingState/>
                            <PagingState
                                defaultCurrentPage={0}
                                defaultPageSize={pageSizes[1]}
                            />

                            <IntegratedFiltering/>
                            <IntegratedSorting/>
                            <IntegratedPaging/>

                            <Table/>
                            <TableColumnVisibility
                                defaultHiddenColumnNames={defaultHiddenColumnNames}
                            />
                            <TableHeaderRow
                                showSortingControls
                            />
                            <TableFilterRow/>

                            <Toolbar/>
                            <ColumnChooser/>

                            <PagingPanel
                                pageSizes={pageSizes}
                            />
                        </Grid>
                    </Paper>
                </Typography>
            </div>
        )
    } else {
        return (
            <div>
                <Typography paragraph align={"center"}>
                    <CircularProgress/>
                </Typography>
            </div>
        )
    }
}
