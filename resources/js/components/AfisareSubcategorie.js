import React, { Component } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";
import ImageGridList from "./ImageGridList";

export default class AfisareSubcategorie extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            subcategorie: [],
            imagineFundal: "",
            errors: null
        };
    }

    componentDidMount() {
        this._isMounted = true;
        var search = window.location.href.split("/");
        var nume = search[search.length - 1];

        Axios.get(`/subcategory/${nume}`)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        subcategorie: response.data.subcategorie
                    });
                }
            })
            .catch(error => this.setState({ error }));
    }

    componentDidUpdate() {
        Axios.get(
            `/diplaybackgroundimage/${this.state.subcategorie.id_categorie}`
        )
            .then(response => {
                this.setState({
                    imagineFundal: response.data.imagineBackground
                });

                document.getElementsByClassName(
                    "bradcam_bg_2"
                )[0].style.backgroundImage = `url(/images/backend_images/categorii/${this.state.imagineFundal})`;
            })
            .catch(error => this.setState({ error }));
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div className="container box_1170">
                <div className="section-top-border">
                    <h3 className="mb-30">{this.state.subcategorie.nume}</h3>
                    <div className="row">
                        <div className="col-md-4">
                            {/* <img src={"/images/backend_images/subcategorii" + this.state.subcategorie.poza} alt="" className="img-fluid"/> */}
                            <ImageGridList />
                        </div>
                        <div className="col-md-8 mt-sm-20">
                            <p>{this.state.subcategorie.descriere}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
if (document.getElementsByClassName("subcategorie")[0]) {
    ReactDOM.render(
        <AfisareSubcategorie />,
        document.getElementsByClassName("subcategorie")[0]
    );
}
