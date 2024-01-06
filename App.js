import React from 'react';
import ReactDOM from 'react-dom/client';
import Restaurant from './src/components/Restaurant';

// const heading = React.createElement('h1', {}, "Swiggy.com");
const root = ReactDOM.createRoot(document.getElementById('root'));



const Header = () => {
    return (
        <div>
            Navbar
        </div>
    )
}

const App = () => {
    return (
        <Restaurant />
    )
}

const Footer = () => {
    return (
        <div>
            Footer
        </div>
    )
}

root.render(<App />);