import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import PostCard from "./PostCard";
import Typography from "@material-ui/core/Typography";
import ErrorCard from "./ErrorCard";

import "axios";
const axios = require("axios");

function SavedPosts({ creds }) {
    const [posts, setPosts] = React.useState([]);

    const [skip, setSkip] = React.useState(0);

    const [isLoading, setIsLoading] = React.useState(true);

    const [apiUrl] = React.useState("https://archit.xyz/rss/api/saves");

    const [apiError, setApiError] = React.useState("");

    function addPosts(newPosts) {
        // TODO: Implement adding new posts to old posts
        setPosts(newPosts);
    }

    React.useEffect(() => {
        if (creds.username !== "") {
            fetchPosts();
        }
    }, [creds, skip]);

    const fetchPosts = async () => {
        console.log("In fetchPosts - ", creds);
        setIsLoading(true);
        try {
            const result = await axios(apiUrl + "?skip=" + skip + "&limit=10", {
                headers: {
                    Authorization:
                        "Basic " + btoa(creds.username + ":" + creds.password)
                }
            });
            console.log("Setting posts - ", result.data.saved_posts);
            addPosts(result.data.saved_posts);
            setIsLoading(false);
        } catch (error) {
            console.log("Caught Error - ", error);
            setIsLoading(false);
            setApiError(error.message);
        }
    };

    const fetchRandomPosts = async () => {
        console.log("In fetchRandomPosts - ", creds);
        var randomApiUrl = "https://archit.xyz/rss/api/saves/random";
        setIsLoading(true);
        try {
            const result = await axios(randomApiUrl, {
                headers: {
                    Authorization:
                        "Basic " + btoa(creds.username + ":" + creds.password)
                }
            });
            console.log("Setting random posts - ", result.data.saved_posts);
            setPosts(result.data.saved_posts);
            setIsLoading(false);
        } catch (error) {
            console.log("Caught Error - ", error);
            setIsLoading(false);
            setApiError(error.message);
        }
    };

    if (isLoading) {
        return (
            <center>
                <CircularProgress color="secondary" />
            </center>
        );
    } else {
        if (apiError) {
            return (
                <div>
                    <ErrorCard apiError={apiError} />
                </div>
            );
        } else {
            return (
                <div>
                    <Card>
                        <CardContent>
                            <div align="center">
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        fetchPosts(true);
                                    }}
                                >
                                    Latest
                                </Button>{" "}
                                <Button
                                    variant="contained"
                                    onClick={fetchRandomPosts}
                                >
                                    Random
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <br />
                    {posts.map((post, key) => (
                        <PostCard post={post} key={post.id} />
                    ))}
                    <center>
                        <Button
                            variant="contained"
                            onClick={() => setSkip(skip + 10)}
                        >
                            Load more
                        </Button>
                    </center>
                </div>
            );
        }
    }
}

export default SavedPosts;
