import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title : 'What is React',
        content: 'React is a JS framework.'
    },
    {
        title : 'Why use React',
        content: 'React is famous among engineers.'
    },
    {
        title : 'Don\'t use React',
        content: 'React is famous among engineers.'
    }
];

const App = () =>{
    return (
        <div><Accordion items={items}/></div>
    );
}

export default App;