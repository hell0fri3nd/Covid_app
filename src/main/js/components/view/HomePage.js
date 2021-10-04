import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";


export default function HomePage() {

    return (
        <div style={{flex: 1 / 3}}>
            <Typography align={"center"}>
                <h1>Welcome!</h1>
            </Typography>
            <Paper>
                <Divider/>
                <Typography paragraph style={{margin: 50}}>
                    This application is designed to display data of the new Covid 19. The user can navigate through a
                    chart
                    and a customizable table.
                    This is a React.js and Spring Data REST Project, for details of its structure consult the
                    Documentation.
                </Typography>
                <Divider/>
                <Typography paragraph style={{margin: 10}}>
                    All data is downloaded from:
                    <Typography paragraph style={{color: "cadetblue"}}>
                        <a href={"https://covid.ourworldindata.org/"} style={{textDecoration: "none"}}>
                            https://covid.ourworldindata.org/
                        </a>
                    </Typography>
                </Typography>
                <Divider/>
            </Paper>
        </div>
    )
}
