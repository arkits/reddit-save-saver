import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import NavBar from "./components/NavBar";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import "axios";

const axios = require("axios");

function App() {
    const classes = useStyles();

    const [creds, setCreds] = React.useState({
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

function PageContent({ creds }) {

	const [data, setData] = React.useState({});

	React.useEffect(() => {
		if(creds.username !== ""){
			console.log("creds has changed -", creds);
			const fetchData = async () => {
                const result = await axios("https://archit.xyz/rss/api/debug", {
                    headers: {
                        Authorization: "Basic " + btoa(creds.username + ":" + creds.password)
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
                <Typography variant="h5" component="h2" gutterBottom>
                    {"You are currently logged in."} <br />
					{JSON.stringify(data, null, 2)}
                </Typography>
            </div>
        );
    }
}

function Copyright() {
    const [data, setData] = React.useState({});

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://archit.xyz/rss/api");
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        align="center"
                    >
                        <Link color="inherit" href="https://arkits.github.io/">
                            arkits.github.io
                        </Link>
                        {" // "}
                        <Link color="inherit" href="https://archit.xyz/">
                            archit.xyz
                        </Link>
                    </Typography>
                </Grid>
                <Grid item xs={6} align="right">
                    {data.name}/{data.version}
                </Grid>
            </Grid>
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
