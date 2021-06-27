import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
          expenses: []
        };
      }
    componentDidMount(){
                 // Make a request for a user with a given ID
                 axios.get('https://jsonplaceholder.typicode.com/posts')
                 .then((response)=> {
                    this.setState({
                        expenses: response.data
                      });
                 })
                 .catch(function (error) {
                 // handle error
                 console.log(error);
                 })
    }
    render() {

        const data=this.state.expenses;
     
        const alldata=data.map((list,idx)=>{
       return(
        <tr>
       <td>{list.id}</td>
       <td>{list.title}</td>
       <td>{list.body}</td>
        </tr>
           )
        });
     
       return (
            <div>
                     <h1>Product List</h1>
                     <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                         <thead>
                             <tr>
                                 <th>#</th>
                                 <th>title</th>
                                 <th>body</th>
                             </tr>
                         </thead>
                         <tbody>
                             {alldata}	
                         </tbody>
                     </table>
                 </div>
       );
     }
}

export default App