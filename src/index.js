import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserInfo from "./UserInfo/UserInfo";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <UserInfo />
);
