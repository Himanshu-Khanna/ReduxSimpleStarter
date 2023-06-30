import React from 'react';
import ReactDOM from 'react-dom';
import SerachBar from './components/search_bar';

const API_KEY ='AIzaSyD77w4st73HLdVLPyXyM8OqYmz8xpPNGmw';


// Creeate a new commponent. This component should produce a HTML
const App = () => {
    return (
    <div>
        <SerachBar />
    </div>
    ); // JSX is just syntactic sugar for JavaScript
}

// Take this component generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));