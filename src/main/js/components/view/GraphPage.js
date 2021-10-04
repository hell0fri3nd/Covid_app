import React, {useEffect, useState} from "react";
import Typography from "@material-ui/core/Typography";
import {
    Chart,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import {Animation, ArgumentScale, LineSeries, ValueScale, ZoomAndPan} from '@devexpress/dx-react-chart';
import {getByLocation} from "../api/DataGetters";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {parseCountries} from "../controller/Parsers";
import CircularProgress from "@material-ui/core/CircularProgress";
import ListSubheader from "@material-ui/core/ListSubheader";

const adjustDomain = ([start, end]) => [Math.floor(start), Math.ceil(end)];

const style = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150
    },
    divider: {
        margin: 30,
    }
}));

const LocationButton = ({styling, ...props}) => (
    <FormControl className={styling.formControl}>
        <InputLabel htmlFor="grouped-select">Country</InputLabel>
        <Select
            labelId="open-select-label"
            id={props.country}
            open={props.open}
            onClose={props.handleClose}
            onOpen={props.handleOpen}
            value={props.country}
            onChange={props.handleChange}
        >
            <ListSubheader>Favourites</ListSubheader>
            <MenuItem value="Italy">
                <em>Italy</em>
            </MenuItem>
            <MenuItem value="Brazil">
                <em>Brazil</em>
            </MenuItem>
            <ListSubheader>All Countries</ListSubheader>
            {props.locToChoose.map((item, index) => {
                return (
                    <MenuItem value={item} key={index}>{item}</MenuItem>
                )
            })}
        </Select>
    </FormControl>
);

export default function GraphPage() {

    const [open, setOpen] = useState(false);
    const [locToChoose, setLocToChoose] = useState([]);
    const [curLocation, setCurLocation] = useState("Italy");
    const [loaded, setLoaded] = useState(false);
    const [chartData, setData] = useState([]);

    useEffect(() => {
        parseCountries().then(l => setLocToChoose(l)).then(() => setLoaded(true));
    }, []);

    useEffect(() => {
        getByLocation(curLocation)
            .then(r => setData(r.data._embedded.csvEntries));
    }, [curLocation])

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        setCurLocation(event.target.value);
    };


    if (loaded) {
        return (
            <div style={{flex: 1 / 3}}>
                <Typography align={'center'}>
                    <h1>Data in a graph by Location </h1>
                </Typography>
                <Divider style={style.divider}/>
                <LocationButton
                    styling={style}
                    country={curLocation}
                    handleChange={handleChange}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={open}
                    locToChoose={locToChoose}
                />
                <Typography paragraph align={"center"}>
                    <Divider style={style.divider}/>
                    <Paper style={{flex: 1 / 3}}>
                        <Chart data={chartData} style={{flex: 1 / 3}}>
                            <ArgumentScale modifyDomain={adjustDomain}/>
                            <ValueScale modifyDomain={adjustDomain}/>
                            <ArgumentAxis/>
                            <ValueAxis/>

                            <LineSeries valueField="totalDeaths" argumentField="totalCases"/>
                            <Title text={"Death Rate in " + curLocation}/>
                            <ZoomAndPan/>
                            <Animation/>
                        </Chart>
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
