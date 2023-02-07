import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
import Portofolio from './components/portofolio/Portofolio';

const App = () => {
    return (
        <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portofolio />
        <Testimonials />
        <Contact />
        <Footer />
        </>
    )
}

export default App;