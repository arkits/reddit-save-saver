import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    title: {
        fontSize: 14
    }
});

function StatsCards({ data }) {

    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Welcome
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {data.username}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Number of Posts
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {data.number_of_posts}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default StatsCards;
