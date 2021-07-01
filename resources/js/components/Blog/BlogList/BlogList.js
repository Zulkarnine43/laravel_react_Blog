import React from 'react';
import { Link } from "react-router-dom";

const BlogList = (props) => {

    return (
        <div className="BlogList">

            <div className="col-md-12">
                <div className="blog-entry d-md-flex">
                    <img src={props.image} className="img img-2"  alt={"Blog Data"}/>
                    <div className="text text-2 pl-md-4">
                        <h3 className="mb-2"><Link to={`/post/${props.id}`}>Edit</Link></h3>
                        <div className="meta-wrap">
                            <p className="meta">
                                <span><i className="icon-calendar mr-2"/>{props.date}</span>
                                <span><i className="icon-comment2 mr-2"/>{props.comment}</span>
                            </p>
                        </div>
                        <p className="mb-4">
                           
                        </p>
                        <p>
                            <Link className="btn btn-primary" to={`/post/${props.id}`} >Read More <span
                                className="ion-ios-arrow-forward"/></Link>

                            <a href="#" className="btn btn-danger" onClick={props.remove} style={{float : 'right' }}><span
                                className="ion-ios-remove-circle-outline"/> Remove</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogList;