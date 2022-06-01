import React from 'react';

class Posts extends React.Component {
  
    constructor(props) {
        super(props);
        // initialization code here
        console.log("Posts created");

    }

    componentDidMount() {
        console.log("Posts mounted");
    }

     render () {
        if (!this.state.posts) {
            return (
                <div>Before posts fetched from server</div>  
            );
        }
        return (
            <div>
                <div>List of Posts goes here...</div>
                {/*
                this.state.posts.map(post => {
                    return <Post post={post} key={'post-' + post.id} />
                }
                */}
            </div>
        );     
    }
}

export default Posts;