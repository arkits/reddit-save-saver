import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function LoginDialog({ setCreds }) {
    const [open, setOpen] = React.useState(false);
    const [p_user, setUsername] = React.useState("");
    const [p_pass, setPassword] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!p_user || !p_pass) return;

        setCreds({
            username: p_user,
            password: p_pass
        });

        handleClose();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>Login</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            className="input"
                            type="text"
                            fullWidth
                            value={p_user}
                            onChange={e => setUsername(e.target.value)}
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="password"
                            label="Password"
                            className="input"
                            type="password"
                            fullWidth
                            value={p_pass}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Set</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default LoginDialog;
