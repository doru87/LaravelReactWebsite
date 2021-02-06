import React, { Component } from 'react'
import Axios from 'axios';

const UserContext = React.createContext();
const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

export default class Context extends Component {

  constructor(props) {
    super(props);
    this.state = {
        searchword:'',
        filterElements:[],
        subcategories:[]
    }
  }

    handleSearchChange = e => {
      e.preventDefault();
        this.setState ({
            searchword: e.target.value
        });
      
    }

    handleSubmit = e =>{
        e.preventDefault();
        const word = this.state.searchword
        Axios.get(`/search/${word}`,{ 
         
            params: {
              word: this.state.searchword
            }
        }).then(response => {
          
          document.getElementById('nav-home').getElementsByClassName('row')[0].innerHTML=response.data.output;
        
           this.setState({
               filterElements: response.data
           })
         
           var rezultate = document.querySelectorAll('.single_explorer');
           
           Array.from(rezultate).forEach(rezultat => {
           var rez = rezultat.getAttribute('data-value').split(" ");

            var search = this.state.searchword.charAt(0).toUpperCase() + this.state.searchword.slice(1)

             if(rez.includes(search)){
             
              document.getElementById(rezultat.getAttribute('data-value')).scrollIntoView({behavior: 'smooth'});
             }
           })

          }).catch(function (error) {
            console.log(error.response)
          })
          
    }

    render() {
        return (
          <UserContext.Provider value={{...this.state, handleSearchChange: this.handleSearchChange, handleSubmit: this.handleSubmit,}}>
            {this.props.children}
          </UserContext.Provider>
        )  
    }
}
export {Context,UserContext,UserProvider}