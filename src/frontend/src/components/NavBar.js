import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LoginDialog from "./LoginDialog";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        fontFamily: "Space Mono",
        fontWeight: "700",
        fontStyle: "italic"
    }
}));

export default function NavBar({ setCreds }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        reddit-save-saver
                    </Typography>
                    <LoginDialog setCreds={setCreds} />
                </Toolbar>
            </AppBar>
        </div>
    );
}
