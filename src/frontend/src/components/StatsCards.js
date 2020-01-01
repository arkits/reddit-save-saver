import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

var moment = require("moment");

const useStyles = makeStyles({
    popover: {
        pointerEvents: "none"
    },
    title: {
        fontSize: 14
    }
});

function StatsCards({ data }) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = event => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);

    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
            <Grid
                item
                xs={4}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Last Update
                        </Typography>
                        <Typography variant="h6" component="h2">
                            {moment(data.last_dump * 1000).fromNow()}
                        </Typography>
                    </CardContent>
                </Card>

                <Popover
                    id="mouse-over-popover"
                    className={classes.popover}
                    classes={{
                        paper: classes.paper
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "left"
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography>
                        {moment(data.last_dump * 1000).format(
                            "dddd, MMMM Do YYYY, h:mm:ss a"
                        )}
                    </Typography>
                </Popover>
            </Grid>
        </Grid>
    );
}

export default StatsCards;
