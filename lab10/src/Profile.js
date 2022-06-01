import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // constructor logic
        console.log('Profile component created');
    }

    componentDidMount() {
        // fetch posts
        console.log('Profile component mounted');
    }

    render () {
        return (
            <header>
                <img src=""/>
                <h1>{this.props.username}</h1>
            </header>  

        );
    }
         
}

export default Profile;