import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: 'Max',
        submitted: false
    };

    componentDidMount(){
        console.log(this.props);
    };

    postDataHandler = () => {
        const {title, body, author} = this.state;
        axios.post('/posts.json', {title, body, author})
            .then(response => {
                console.log(response);
                this.props.history.push('/posts');
                //this.setState({submitted: true});
            });
    };

    render () {
        return (
            <div className="NewPost">
                { this.state.submitted ? <Redirect to="/posts"/> : null }
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({body: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;