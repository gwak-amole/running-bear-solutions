
// components
import Hero from './Hero'
import CertificationSlide from './CertificationSlide'
import SearchBar from './SearchBar'
import FAQSection from './FAQSection'
import Footer from './Footer'
import About from './About'

const Home = () => {
    return(
        <>
            <Hero />
            <SearchBar />
            <About />
            <FAQSection />
            <CertificationSlide />
            <Footer />
        </>
    );
}

export default Home