import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import CommentDetail from './commentDetail';
import ApprovalCard from './ApprovalCard';
import { faker } from '@faker-js/faker';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a functions
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const root =ReactDOM.createRoot(document.querySelector('#root'))

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <CommentDetail
          author = "Sam"
          timeAgo = "Today at 4:45 PM"
          avatar = {faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
      <CommentDetail
          author = "Jane"
          timeAgo = "Today at 4:45 PM"
          avatar = {faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail
          author = "Sam"
          timeAgo = "Today at 4:45 PM"
          avatar = {faker.image.avatar()}
        /></ApprovalCard> 
    </div>
    
  );
  
};
root.render(App());
// const root =ReactDOM.createRoot(document.querySelector('#root'))
// root.render(App)