import React, { Component, Fragment } from "react";
import Axios from "axios";
import { Range } from "./RangeSlider";

export default class AdvancedFilter extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            datele: {}
        };
        this.child = React.createRef();
    }

    componentDidMount() {
        this._isMounted = true;
        var search = window.location.href.split("/");
        var id = search[search.length - 1];
        Axios.get(`/minmaxprice/${id}`, {})
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        datele: response.data.minmaxprice
                    });
                }
            })
            .catch(function(error) {
                console.log(error.response);
            });
    }

    myCallback = dataFromChild => {
        this.props.anotherCallbackFromParent(dataFromChild);
    };

    handleClick = () => {
        this.child.current.setInitialValues();
    };
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <Fragment>
                <div className="col-xl-12 col-lg-12">
                    <div className="filter_wrap">
                        <h3 className="exp_title">Filtru avansat</h3>
                        <div className="filter_main_wrap">
                            <div className="last_range">
                                <label htmlFor="amount">Pret:</label>
                                <div id="slider-range">
                                    <Range
                                        callbackFromParent={this.myCallback}
                                        ref={this.child}
                                        date={this.state.datele}
                                    />
                                </div>
                                <button
                                    className="boxed-btn2"
                                    onClick={this.handleClick}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
