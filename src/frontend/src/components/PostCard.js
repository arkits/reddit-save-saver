import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    card: {
        display: "flex"
    },
    large: {
        width: "100%",
        height: "100%"
    }
}));

function PostCard({ post }) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea
                    target="_blank"
                    href={"https://reddit.com" + post.permalink}
                >
                    <Grid container spacing={0}>
                        <Grid item xs={9}>
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
                        </Grid>
                        <Grid align="right" item xs={3}>
                            <Avatar
                                variant="square"
                                className={classes.large}
                                src={post.thumbnail}
                            ></Avatar>
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
            <br />
        </div>
    );
}

export default PostCard;
