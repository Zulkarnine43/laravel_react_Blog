import React,{Component} from 'react';
import { Link } from "react-router-dom";

class BlogDetail extends Component{
    constructor(props){
        super(props);
        // alert(this.props.match.params.id);
        this.state = {
            PostData : []
        }
    }

    componentDidMount() {
        axios.get('http://localhost/laravel_react_first/public/api/post/'+this.props.match.params.id).then((response) => {
            this.setState({PostData:response.data})
        }).catch(function(error) {
            console.log(error);
        });
    }
    render(){
       const value= this.state;
        return (
            <div className="BlogData">
                <section className="ftco-section ftco-no-pt ftco-no-pb">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-lg-8 px-md-5 py-5">
                                <Link to="/home" className="btn btn-primary">
                                    <span className="ion-ios-arrow-back"/> Back to Blog</Link>
                                <div className="row pt-md-4">
                                    <h1 className="mb-3"># {value.title}</h1>
                                    <p>{value.description}</p>
                                    <p>
                                        <img src={value.image} alt={title} className="img-fluid"/>
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