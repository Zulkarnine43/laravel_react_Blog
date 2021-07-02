import React,{Component} from 'react';
import { Link } from "react-router-dom";
import BlogList from './BlogList/BlogList';
import axios from "axios";

class BlogIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            postList: [],
        };
    };

    componentDidMount() {
        axios.get('http://localhost/laravel_react_Blog/public/api/post').then((response) => {
           this.setState({postList:response.data})
        }).catch(function(error) {
            console.log(error);
        });
    };

    removePostHandler(key,id){
        axios.get('http://localhost/laravel_react_Blog/public/api/remove/post/'+id).then((response) => {
            console.log(response);
        }).catch(function(error) {
            console.log(error);
        });

    }

    render(){
        let BlogListData=null;

                BlogListData = this.state.postList.map((post,key) =>
                    <BlogList
                        key={key}
                        remove={() => this.removePostHandler(key,post.id)}
                        title={post.title}
                        image={post.image}
                        desc={post.description}
                        date={post.created_at}
                        id={post.id}
                        comment={6}
                    />
                );
        return(
            <div className="BlogSection">
                    <section className="ftco-section ftco-no-pt ftco-no-pb">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-xl-12 py-12 px-md-12">
                                    <div className="row pt-md-4">
                                        {BlogListData}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        );
    }
};

export default BlogIndex;