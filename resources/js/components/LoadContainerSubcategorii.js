import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import AfisareSubcategorii from "./AfisareSubcategorii";
import AdvancedFilter from "./AdvancedFilter";
import Loadable from "react-loadable";

export default class LoadContainerSubcategorii extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listDataFromChild: []
        };
    }

    myAnotherCallback = dataFromChild => {
        this.setState({
            listDataFromChild: dataFromChild
        });
    };
    render() {
        return (
            <Fragment>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div id="advancedfilter">
                        <AdvancedFilter
                            anotherCallbackFromParent={this.myAnotherCallback}
                        />
                    </div>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-8">
                    <div className="row">
                        <AfisareSubcategorii
                            subcategorii={this.state.listDataFromChild}
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

if (document.getElementsByClassName("loadcontainer")[0]) {
    ReactDOM.render(
        <LoadContainerSubcategorii />,
        document.getElementsByClassName("loadcontainer")[0]
    );
}
