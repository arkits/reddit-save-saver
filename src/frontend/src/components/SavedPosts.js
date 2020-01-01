import React from "react";
import Grid from "@material-ui/core/Grid";
import "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

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
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        if (creds.username !== "") {
            console.log("creds has changed -", creds);
            const fetchData = async () => {
                const result = await axios(
                    "https://archit.xyz/rss/api/saves?skip=0&limit=10",
                    {
                        headers: {
                            Authorization:
                                "Basic " +
                                btoa(creds.username + ":" + creds.password)
                        }
                    }
                );
                setData(result.data.saved_posts);
            };
            fetchData();
        }
    }, [creds]);

    return (
        <div>
            {data.map((post, key) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    );
}

function PostCard({ post }) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <Grid container spacing={0}>
                    <Grid item xs={9}>
                    <CardActionArea href={ "https://reddit.com" + post.permalink }>
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
                                {post.subreddit} | { new Date(post.created_utc * 1000).toDateString() }
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Grid>
                    <Grid align="right" item xs={3}>
                        <Avatar
                            variant="square"
                            className={classes.large}
                            src="https://images.unsplash.com/photo-1577493184543-921d0391b9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                        ></Avatar>
                    </Grid>
                </Grid>
            </Card>
            <br />
        </div>
    );
}

export default SavedPosts;
