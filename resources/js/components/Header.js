import React,{Component} from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Blog from './Blog/BlogIndex';
import CreateBlog from './Blog/BlogCreate';
import BlogDetail from "./Blog/BlogList/BlogDetail";
import {PUBLIC_URL} from './baseUrl';
class Header extends Component{
render(){
        return(
            <Router>
            <div className="HeaderSection">

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to={`${PUBLIC_URL}home`}>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={`${PUBLIC_URL}create-blog`}>Create Blog</Link>
                            </li>

                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path={`${PUBLIC_URL}home`}>
                        <Blog />
                    </Route>
                    <Route path={`${PUBLIC_URL}create-blog`}>
                        <CreateBlog />
                    </Route>
                    <Route path={`${PUBLIC_URL}post/:id`} component={props => <BlogDetail  {...props} />}>
                    </Route>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Header;