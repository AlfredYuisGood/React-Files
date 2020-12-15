import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail author = "Alfred" timeAge = "Today at 4:45PM" content = "Nice Blog Post" avatar = {faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author = "Catherine" timeAge = "Today at 2:00AM" content = "I like dog" avatar = {faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author = "Maomao" timeAge = "Yesterday at 6:00PM" content = "I like cat" avatar = {faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
