import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

export default class Footer extends Component {
    renderMap() {
        var setting = {
            height: 300,
            width: 700,
            zoom: 17,
            queryString:
                "Restaurant Casa Niela, Bulevardul Oltenia, Craiova, Romania",
            place_id: "ChIJ53I7RNzZUkcRTjI3183_om8",
            satellite: false,
            centerCoord: [44.33588436551639, 23.78376854999999],
            cid: "0x6fa2ffcdd737324e",
            cityUrl: "/romania/craiova-35841",
            id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
            embed_id: "83947"
        };
        var d = document;
        var s = d.createElement("script");
        s.src = "https://1map.com/js/script-for-user.js?embed_id=83947";
        s.async = true;
        s.onload = function(e) {
            window.OneMap.initMap(setting);
        };
        var to = d.getElementsByTagName("script")[0];
        to.parentNode.insertBefore(s, to);
    }
    renderYear() {
        document.write(new Date().getFullYear());
    }

    render() {
        return (
            <Fragment>
                <div className="footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-md-2 col-lg-2">
                                <h2>Nume</h2>
                                <p>Zamșa Doru</p>
                                <h2>Email</h2>
                                <p>zamsadoru@yahoo.ro</p>
                            </div>
                            <div className="col-xl-10 col-md-10 col-lg-10">
                                <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
                                {this.renderMap()}
                                <a href="https://1map.com/map-embed?embed_id=83947">
                                    1map.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

if (document.getElementsByClassName("footer")[0]) {
    ReactDOM.render(<Footer />, document.getElementsByClassName("footer")[0]);
}
