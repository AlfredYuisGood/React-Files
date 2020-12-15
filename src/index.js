import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
// import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author = "Alfred" />
            <CommentDetail author = "Catherine" />
            <CommentDetail author = "Maomao" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
