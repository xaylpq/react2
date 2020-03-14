import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

const Header = () => {
    return <h2>Hello world!</h2>
}

const Field = () => {
    const holder = 'Enter here';
    const styleField = {
        width: '250px'
    }

    return <input
                style={styleField}
                type='text' 
                placeholder={holder}
                autoComplete=''
                className='first'
                htmlFor='' />
}

const Btn = () => {
    const res = () => {
        return 'Click me!'
    }
    const logged = true;
    return <button>{logged ? 'Enter' : res()}</button>
}

const App = () => {
    return (
        <div>
            <Header/>
            <Field/>
            <Btn/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));
