import React from "react";
import Typography from "@material-ui/core/Typography";
import StatsCards from "./StatsCards";
import SavedPosts from "./SavedPosts";
import LinearProgress from '@material-ui/core/LinearProgress';

import "axios";
const axios = require("axios");

function PageContent({ creds }) {
    const [data, setData] = React.useState({});

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        if (creds.username !== "") {
            console.log("creds has changed -", creds);
            const fetchData = async () => {
                const result = await axios("https://archit.xyz/rss/api/debug", {
                    headers: {
                        Authorization:
                            "Basic " +
                            btoa(creds.username + ":" + creds.password)
                    }
                });
                setData(result.data);
                setIsLoading(false);
            };
            fetchData();
        }
    }, [creds]);

    if (creds.username === "") {
        return (
            <div>
                <Typography variant="h2" component="h1" gutterBottom>
                    Namaskar Mandali
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {"You are not currently logged in."}
                </Typography>
            </div>
        );
    } else {
        if (isLoading) {
            return (
                <div>
                    <LinearProgress color="secondary" />
                </div>
            );
        } else {
            return (
                <div>
                    <StatsCards data={data} />
                    <br />
                    <SavedPosts creds={creds} />
                </div>
            );
        }
    }
}

export default PageContent;
