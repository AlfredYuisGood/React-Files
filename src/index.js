import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
// import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author = "Alfred" timeAge = "Today at 4:45PM" />
            <CommentDetail author = "Catherine" timeAge = "Today at 2:00AM" />
            <CommentDetail author = "Maomao" timeAge = "Yesterday at 6:00PM" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
