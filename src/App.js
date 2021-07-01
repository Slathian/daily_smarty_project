import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/main.scss';
import './styles/fonts.css';

import Switches from './routes/Switches';

const App = () => (
    <div className='default'>

        <div className='main-body'>
            <Router>
                <Switches />
            </Router>
        </div>
    </div>
);

export default App; 