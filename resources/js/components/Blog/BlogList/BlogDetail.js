import React,{Component} from 'react';
import { Link } from "react-router-dom";
import {PUBLIC_URL} from '../../baseUrl';

class BlogDetail extends Component{
    constructor(props){
        super(props);
        // alert(this.props.match.params.id);
        this.state = {
            PostData : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost/laravel_react_Blog/public/api/post/'+this.props.match.params.id).then((response) => {
            this.setState({PostData:response.data})
            // console.log(response);
            alert('success');
        }).catch(function(error) {
            console.log(error);
        });
    }
    render(){
     
        return (
            <div>
                <section className="ftco-section ftco-no-pt ftco-no-pb">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-lg-8 px-md-5 py-5">
                                <Link to={`${PUBLIC_URL}home`} className="btn btn-primary">
                                    <span className="ion-ios-arrow-back"/> Back to Blog</Link>
                                <div className="row pt-md-4">
                                    <h1 className="mb-3"># {this.state.PostData.title}</h1>
                                    <p>{this.state.PostData.description}</p>
                                    <p>
                                        <img src={this.state.PostData.image} alt={this.state.PostData.title} className="img-fluid"/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BlogDetail;