import React, { Component } from "react";
import ReactDOM from "react-dom";
import { UserConsumer } from "../context";
import { UserContext } from "../context";
import { Context } from "../context";

export default class Slider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Context>
                <UserConsumer>
                    {context => {
                        const {
                            searchword,
                            handleSearchChange,
                            handleSubmit,
                            isSubmitted
                        } = context;

                        return (
                            <div className="single_slider  d-flex align-items-center slider_bg_1">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-xl-10">
                                            <div className="slider_text text-center justify-content-center">
                                                <i className="fas fa-map-marker-alt big-icon"></i>
                                                <p>Craiova</p>
                                                <h3>
                                                    Găsește atracții în
                                                    apropierea ta
                                                </h3>
                                                <div className="search_form">
                                                    <form
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <div className="row align-items-center">
                                                            <div className="col-xl-9 col-md-8">
                                                                <div className="input_field">
                                                                    <input
                                                                        type="text"
                                                                        name="searchword"
                                                                        placeholder="Ce cauți?"
                                                                        onChange={
                                                                            handleSearchChange
                                                                        }
                                                                        defaultValue={
                                                                            searchword
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="col-xl-3 col-md-4">
                                                                <div className="button_search">
                                                                    <button
                                                                        className="boxed-btn2"
                                                                        type="submit"
                                                                    >
                                                                        Search
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </UserConsumer>
            </Context>
        );
    }
}

if (document.getElementsByClassName("slider_area")[0]) {
    ReactDOM.render(
        <Slider />,
        document.getElementsByClassName("slider_area")[0]
    );
}
