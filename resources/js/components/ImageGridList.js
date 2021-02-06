import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
    root: {
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: 700,
        height: 500
    }
}));

export default function ImageGridList() {
    const classes = useStyles();

    const [date, setDate] = useState([]);
    var search = window.location.href.split("/");
    var nume = search[search.length - 1];
    var numeFinal = nume.replaceAll("%20", " ");

    useEffect(() => {
        Axios.get(`/imagesgridlist/${numeFinal}`, {})
            .then(response => {
                setDate(response.data.poze_subcategorii);
            })
            .catch(err => console.log(err));
    }, [date]);

    return (
        <div className={classes.root}>
            <GridList cellHeight={260} className={classes.gridList} cols={2}>
                {date.map(data => (
                    <GridListTile key={data.id} cols={2}>
                        <img
                            src={
                                "/images/backend_images/subcategorii/" +
                                numeFinal +
                                "/" +
                                data.poza
                            }
                            alt={data.poza}
                            style={{ width: 400, height: 250 }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
