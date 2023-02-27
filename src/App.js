import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Experience from './components/experience/Experience';
import Services from './components/services/Services';

import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';


const App = () => {

    const [theme,setTheme] = useState('dark');

    const handleClick = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else if ( theme === 'light') {
            setTheme('dark');
        }
        console.log(theme);
    }

    useEffect( ()=> {
        document.body.className = theme;
    }, [theme] )

    return (
        <>
        <button onClick={handleClick}>Theme </button>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Contact />
        <Footer />
        </>
    )
}

export default App;