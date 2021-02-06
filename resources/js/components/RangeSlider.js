import React, { useState, Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
const { forwardRef, useImperativeHandle } = React;
import Axios from "axios";

const useStyles = makeStyles({
    root: {
        width: 260
    }
});

const Range = forwardRef((props, ref) => {
    const [dataSlider, setDataSlider] = useState([]);

    const { min, max } = props.date;

    const classes = useStyles();
    const [value, setValue] = React.useState([min, max]);

    React.useEffect(() => {
        setValue([props.date.min, props.date.max]);
    }, [props.date]);

    useImperativeHandle(ref, () => ({
        setInitialValues() {
            setValue([props.date.min, props.date.max]);
        }
    }));

    var search = window.location.href.split("/");
    var id = search[search.length - 1];

    useEffect(() => {
        let isMounted = true;
        Axios.post(`/changeslider/${id}`, { datele_mele: value })
            .then(response => {
                if (isMounted) {
                    setDataSlider(response.data.rezultat);
                }

                props.callbackFromParent(dataSlider);
            })
            .catch(err => console.log(err));
        return () => {
            isMounted = false;
        };
    }, [dataSlider]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <div className={classes.root}>
                <Typography id="range-slider" gutterBottom></Typography>
                <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                />
            </div>
        </Fragment>
    );
});

export { Range };
