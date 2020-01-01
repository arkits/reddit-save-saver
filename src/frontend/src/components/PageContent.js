import React from "react";
import Typography from "@material-ui/core/Typography";
import StatsCards from "./StatsCards";

import "axios";
const axios = require("axios");

function PageContent({ creds }) {
    
    const [data, setData] = React.useState({});

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
                console.log(result);
                setData(result.data);
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
        return (
            <div>
                <StatsCards data={data} />
            </div>
        );
    }
}

export default PageContent;
