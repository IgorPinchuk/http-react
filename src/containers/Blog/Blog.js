import React, { Component, Suspense } from 'react';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import {Route, NavLink, Switch} from 'react-router-dom';

import './Blog.css';
//import asyncComponent from '../../hoc/asyncComponent';

const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {

    state = {
        auth: true
    }

    toggleAuth = () => {
        this.setState((prevState, props) => {
            return {auth: !prevState.auth};
        })
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{color: 'orange', textDecoration: 'underline'}}
                                > Posts </NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?banana=apple'
                            }}> New Post </NavLink></li>
                            <li><button onClick={this.toggleAuth} >{this.state.auth ? 'Log Out' : 'Log In'}</button></li>
                        </ul>
                    </nav>
                </header>
                {/* {<Route path="/" exact render={() => <Posts />} />} */}
                <Switch>
                    { this.state.auth ? <Route path="/new-post" 
                    render={() =>(
                        <Suspense fallback={<div>Loading...</div>}>
                            <NewPost/>
                        </Suspense>
                    )}/> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={()=><h1>404</h1>}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;