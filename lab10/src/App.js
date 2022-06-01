import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
// import Stories from './Stories';
// import Suggestions from './Suggestions';
// import Posts from './Posts';

/* TODO: Break up the HTML below into a series of React components. */
class App extends React.Component {  
    //insert components here
    render () {
        return (
            <div>

            <NavBar title="Photo App" username="test_user"/>

            <aside>
                <header>
                    <Profile username="test_user"/>
                    {/* Navigation Links */}
                </header>
                <div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    <div>
                        Suggestions
                        {/* Suggestions */}
                    </div>
                </div>
            </aside>

            <main className="content">
                <header className="stories">
                    Stories
                    {/* Stories */}
                </header>
                <div id="posts">
                    Posts
                    {/* Posts */}
                </div>
            </main>

            </div>
        );
    }
}

export default App;