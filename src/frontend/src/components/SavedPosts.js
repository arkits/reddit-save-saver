import React from "react";
import Grid from "@material-ui/core/Grid";
import "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    card: {
        display: "flex"
    },
    large: {
        width: "100%",
        height: "100%"
    }
}));

const axios = require("axios");

function SavedPosts({ creds }) {
    const [posts, setPosts] = React.useState([]);

    const [skip, setSkip] = React.useState(0);

    const [isLoading, setIsLoading] = React.useState(true);

    function addPosts(newPosts) {
        const postsToSet = posts;

        newPosts.forEach(post => {
            postsToSet.push(post);
        });

        console.log("Setting Posts - ", postsToSet);
        setPosts([]); // inconsistency in re-rendering the updated component
        setPosts(postsToSet);
    }

    React.useEffect(() => {
        if (creds.username !== "") {
            console.log("In useEffect -", creds);
            setIsLoading(true);
            const fetchData = async () => {
                const result = await axios(
                    "https://archit.xyz/rss/api/saves?skip=" +
                        skip +
                        "&limit=10",
                    {
                        headers: {
                            Authorization:
                                "Basic " +
                                btoa(creds.username + ":" + creds.password)
                        }
                    }
                );

                addPosts(result.data.saved_posts);
                setIsLoading(false);
            };
            fetchData();
        }
    }, [creds, skip]);

    if (isLoading) {
        return (
            <center>
                <CircularProgress color="secondary" />
            </center>
        );
    } else {
        return (
            <div>
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

function PostCard({ post }) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <Grid container spacing={0}>
                    <Grid item xs={9}>
                        <CardActionArea
                            href={"https://reddit.com" + post.permalink}
                        >
                            <CardContent className={classes.content}>
                                <Typography component="h6" variant="h6">
                                    {post.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="textSecondary"
                                >
                                    {post.author}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    color="textSecondary"
                                >
                                    {post.subreddit} |{" "}
                                    {new Date(
                                        post.created_utc * 1000
                                    ).toDateString()}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid align="right" item xs={3}>
                        <Avatar
                            variant="square"
                            className={classes.large}
                            src={post.thumbnail}
                        ></Avatar>
                    </Grid>
                </Grid>
            </Card>
            <br />
        </div>
    );
}

export default SavedPosts;
