import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Axios from 'axios';

export default class MoreCategories extends Component {
    handleClick = (e) => {
        e.preventDefault();
  
        Axios.get('morecategories',{

        }).then(response => {

            document.getElementsByClassName('more-categories')[0].innerHTML = response.data.output
        }).catch(function (error) {
            console.log(error.response)
          })
        
    };
    render() {
        return (
            <section className="button-area">
                <div className="container box_1170 border-top-generic">
                    <div className="button-group-area mt-10">
                        <a href="#"  className="genric-btn primary-border e-large" onClick={this.handleClick}>Mai multe categorii</a> 
                    </div>
                </div>
            </section>
        )
    }
}

if (document.getElementById('more-categories')) {
    ReactDOM.render(<MoreCategories />, document.getElementById('more-categories'));
}