import React, { Component } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";

export default class AfisareSubcategorii extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            subcategorii: [],
            imagineFundal: "",
            errors: null
        };
    }

    componentDidMount() {
        this._isMounted = true;
        var search = window.location.href.split("/");
        var id = search[search.length - 1];

        Axios.get(`/diplaybackgroundimage/${id}`)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        imagineFundal: response.data.imagineBackground
                    });
                }

                document.getElementsByClassName(
                    "bradcam_bg_2"
                )[0].style.backgroundImage = `url(/images/backend_images/categorii/${this.state.imagineFundal})`;
            })
            .catch(error => this.setState({ error }));
        console.log(this.state.error);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return this.props.subcategorii.map(subcategorie => {
            if (subcategorie.id_categorie == 1) {
                return (
                    <div
                        key={subcategorie.id}
                        className="col-xl-6 col-lg-6 col-md-6"
                    >
                        <div
                            className="single_explorer"
                            data={subcategorie.id_categorie}
                        >
                            <div className="thumb">
                                <img
                                    src={
                                        "/images/backend_images/subcategorii/" +
                                        subcategorie.poza
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="explorer_bottom d-flex">
                                <div className="icon">
                                    <i className="flaticon-beach"></i>
                                </div>
                                <div className="explorer_info">
                                    <h3>
                                        <a
                                            href={
                                                "/subcategorie/" +
                                                subcategorie.nume
                                            }
                                        >
                                            {subcategorie.nume}
                                        </a>
                                    </h3>
                                    <p>{subcategorie.adresa}</p>
                                    <ul>
                                        <li>
                                            {" "}
                                            <i className="fa fa-phone"></i>
                                            {subcategorie.telefon}
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope"></i>
                                            {subcategorie.email}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (subcategorie.id_categorie == 2) {
                return (
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div
                            className="single_explorer"
                            data={subcategorie.id_categorie}
                        >
                            <div className="thumb">
                                <img
                                    src={
                                        "/images/backend_images/subcategorii/" +
                                        subcategorie.poza
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="explorer_bottom d-flex">
                                <div className="icon">
                                    <i className="flaticon-beach"></i>
                                </div>
                                <div className="explorer_info">
                                    <h3>
                                        <a
                                            href={
                                                "/subcategorie/" +
                                                subcategorie.nume
                                            }
                                        >
                                            {subcategorie.nume}
                                        </a>
                                    </h3>

                                    <ul>
                                        <li>
                                            {" "}
                                            <i className="fa fa-map-marker"></i>
                                            {subcategorie.adresa}
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o"></i>
                                            {subcategorie.data_concert}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else if (
                subcategorie.id_categorie == 5 ||
                subcategorie.id_categorie == 6 ||
                subcategorie.id_categorie == 8 ||
                subcategorie.id_categorie == 9
            ) {
                return (
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div
                            className="single_explorer"
                            data={subcategorie.id_categorie}
                        >
                            <div className="thumb">
                                <img
                                    src={
                                        "/images/backend_images/subcategorii/" +
                                        subcategorie.poza
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="explorer_bottom d-flex">
                                <div className="icon">
                                    <i className="flaticon-beach"></i>
                                </div>
                                <div className="explorer_info">
                                    <h3>
                                        <a
                                            href={
                                                "/subcategorie/" +
                                                subcategorie.nume
                                            }
                                        >
                                            {subcategorie.nume}
                                        </a>
                                    </h3>
                                    <p>{subcategorie.adresa}</p>
                                    <ul>
                                        <li>
                                            {" "}
                                            <i className="fa fa-phone"></i>
                                            {subcategorie.telefon}
                                        </li>
                                        <li>
                                            <i className="fab fa-facebook-f"></i>
                                            <a
                                                href={
                                                    subcategorie.adresa_facebook
                                                }
                                            >
                                                {subcategorie.adresa_facebook}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }
}

if (document.getElementsByClassName("subcategorii")[0]) {
    ReactDOM.render(
        <AfisareSubcategorii />,
        document.getElementsByClassName("subcategorii")[0]
    );
}
