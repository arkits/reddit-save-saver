import React from "react";
import Typography from "@material-ui/core/Typography";
import StatsCards from "./StatsCards";
import SavedPosts from "./SavedPosts";
import LinearProgress from "@material-ui/core/LinearProgress";
import ErrorCard from "./ErrorCard";

import "axios";
const axios = require("axios");

function PageContent({ creds }) {
    const [data, setData] = React.useState({});
    const [apiError, setApiError] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        if (creds.username !== "") {
            async function fetchData() {
                try {
                    const result = await axios(
                        "https://archit.xyz/rss/api/debug",
                        {
                            headers: {
                                Authorization:
                                    "Basic " +
                                    btoa(creds.username + ":" + creds.password)
                            }
                        }
                    );

                    setData(result.data);
                    setIsLoading(false);
                } catch (error) {
                    setIsLoading(false);
                    console.log("Caught Error! - ", error);
                    setApiError(error.message);
                }
            }

            fetchData().catch(console.error);
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
            if (apiError !== "") {
                return (
                    <div>
                        <ErrorCard apiError={apiError} />
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
}

export default PageContent;
