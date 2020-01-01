import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import "axios";
const axios = require("axios");

function Copyright() {
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://archit.xyz/rss/api");
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                    >
                        <Link color="inherit" href="https://arkits.github.io/">
                            arkits.github.io
                        </Link>
                        {" // "}
                        <Link color="inherit" href="https://archit.xyz/">
                            archit.xyz
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={6} align="right">
                    {data.name}/{data.version}
                </Grid>
            </Grid>
        </div>
    );
}

export default Copyright;