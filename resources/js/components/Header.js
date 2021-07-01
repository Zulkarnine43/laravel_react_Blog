import React,{Component} from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Blog from './Blog/BlogIndex';
import CreateBlog from './Blog/BlogCreate';
import BlogDetail from "./Blog/BlogList/BlogDetail";
class Header extends Component{
render(){
        return(
            <Router>
            <div className="HeaderSection">

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/create-blog">Create Blog</Link>
                            </li>

                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/home">
                        <Blog />
                    </Route>
                    <Route path="/create-blog">
                        <CreateBlog />
                    </Route>
                    <Route path="/post/:id" component={props => <BlogDetail  {...props} />}>
                    </Route>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default Header;