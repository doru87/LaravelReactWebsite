import React,{useState,useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Axios from 'axios';

export default function Checkboxes(props) {

    const [state, setState] = useState({
        checkedA: false,
 
      });

      const [result,setResult] = useState([]);


      const handleChange = event => {
        function checkTime(i) {
          if (i < 10) {
            i = "0" + i;
          }
          return i;
        }
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        // add a zero in front of numbers<10
        m = checkTime(m);
        s = checkTime(s);
        var full_time =  h + ":" + m + ":" + s;
  

        setState({ ...state, [event.target.name]: event.target.checked, full_time});

        // console.log(state);
        
        
  
      };

      var search = window.location.href.split("/");
      var id = search[search.length-1]
       
      // function checkTime(i) {
      //   if (i < 10) {
      //     i = "0" + i;
      //   }
      //   return i;
      // }
      // var today = new Date();
      // var h = today.getHours();
      // var m = today.getMinutes();
      // var s = today.getSeconds();
      // // add a zero in front of numbers<10
      // m = checkTime(m);
      // s = checkTime(s);
      // var full_time =  h + ":" + m + ":" + s;

      // setState({ ...state, full_time });
      // console.log(state);
    // console.log(full_time);
      
      useEffect(() => {

        const datele_mele = {
          full_time : state.full_time
          // checkedA: state.checkedA
        }
        // console.log(datele_mele);
        Axios.post(`/openclosed/${id}`,datele_mele).then(response => {
          
          setResult(response.data.result);
          props.checkboxescallbackFromParent(result);
   
          // console.log(datele_mele);
          // console.log(response.data);
          
        }).catch((err) => console.log(err.response));
      },[result])

      

      
    
 
  
      return (
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="Secondary"
          />
              </FormGroup>
              
  );
}

