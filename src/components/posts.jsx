import React, { Component } from 'react';
import { fetchPosts } from "../actions/postAction";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import SimpleForm from './simpleform';

// import PropTypes from 'prop-types';

class Posts extends Component {
    // constructor(Props) {
    //     super(Props);
    //     this.state = {
    //         data: []
    //     }
    // }
    componentWillMount() {
        this.props.fetchPosts();
        // const url = "https://jsonplaceholder.typicode.com/posts";
        // fetch(url).then(response => response.json()).then(res => this.setState({ data: res }))
    }
    render() {

        return (
            <div>
                <SimpleForm />
                {this.props.posts.map(item => (<div key={item.id}><h1>{item.title}</h1><p>{item.body}</p></div>))}
            </div>
        )
    }
}
Posts.prototypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired,

}
const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
