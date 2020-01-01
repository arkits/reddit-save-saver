import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import NavBar from "./components/NavBar";
import PageContent from "./components/PageContent"
import Copyright from "./components/Copyright"

import { useLocalStorage } from "./util/storage";

function App() {
    const classes = useStyles();

    const [creds, setCreds] = useLocalStorage('creds', {
        username: "",
        password: ""
    });

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Box component="main" className={classes.main}>
                <NavBar setCreds={setCreds} />
                <Container className={classes.content} maxWidth="sm">
                    <PageContent creds={creds} />
                </Container>
            </Box>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
    },
    main: {
        marginBottom: theme.spacing(2)
    },
    content: {
        marginTop: theme.spacing(8)
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor:
            theme.palette.type === "dark"
                ? theme.palette.grey[800]
                : theme.palette.grey[200]
    }
}));

export default App;
