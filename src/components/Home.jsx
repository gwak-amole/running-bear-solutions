
// components
import Hero from './Hero'
import CertificationSlide from './CertificationSlide'
import SearchBar from './SearchBar'
import FAQSection from './FAQSection'
import Footer from './Footer'

const Home = () => {
    return(
        <>
            <Hero />
            <SearchBar />
            <FAQSection />
            <CertificationSlide />
            <Footer />
        </>
    );
}

export default Home