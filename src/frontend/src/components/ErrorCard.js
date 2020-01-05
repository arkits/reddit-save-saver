import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


function ErrorCard({apiError}) {
    return (
        <div>
            <Card>
                <CardContent>
                    <div align="center">
                        <Typography color="textSecondary" gutterBottom>
                            Whoops!
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {apiError}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default ErrorCard;
