import React,{Component} from 'react';
import axios from "axios";

class BlogCreate extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image: '',
            title: '',
            description: '',
        };
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const postData = this.state;
        axios.post('http://localhost/laravel_react_Blog/public/api/createPost',postData).then((response) => {
            if(response.data.status === "success"){
                console.log('successfully');
            }else{
                console.log(response);
            }
        }).catch(function (error) {
                console.log(error);
            });
    }

    render(){
        return(
            <div className="CreateBlog">
                <div className="row block-12">
                    <div className="col-lg-12 d-flex">
                        <form onSubmit={this.handleSubmit} className="bg-light p-5 contact-form col-md-12">
                            <div className="form-group">
                                <input type="text" placeholder="Image Link" name="image" className="form-control" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="title" placeholder="Blog Title" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <textarea name="description" cols="30" rows="7" className="form-control" placeholder="Description" onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary py-3 px-5">Create Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogCreate;