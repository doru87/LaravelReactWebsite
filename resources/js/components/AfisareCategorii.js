import React, { Component } from "react";
import Axios from "axios";
import ReactDOM from "react-dom";

export default class AfisareCategorii extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorii: [],
            errors: null
        };
    }

    componentDidMount() {
        Axios.get("/index")
            .then(response => {
                this.setState({
                    categorii: response.data.categorii
                });

                document.getElementsByClassName(
                    "slider_bg_1"
                )[0].style.backgroundImage = `url(/images/backend_images/categorii/craiova.jpg)`;
            })
            .catch(error => this.setState({ error }));

        console.log(this.state.error);
    }

    render() {
        return this.state.categorii.map(categorie => {
            return (
                <div className="col-xl-3 col-md-4 col-lg-3">
                    <div className="single_catagory">
                        <div className="thumb">
                            <img
                                src={
                                    "images/backend_images/categorii/" +
                                    categorie.poza_categorie
                                }
                                alt=""
                            />
                        </div>
                        <div className="hover_overlay">
                            <div className="hover_inner">
                                <span>
                                    <a
                                        href={"/subcategorii/" + categorie.id}
                                        onClick={this.handleClick}
                                    >
                                        <h4>{categorie.nume_categorie}</h4>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
}

if (document.getElementsByClassName("categorii")[0]) {
    ReactDOM.render(
        <AfisareCategorii />,
        document.getElementsByClassName("categorii")[0]
    );
}
