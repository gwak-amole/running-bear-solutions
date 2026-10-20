import image1 from '../assets/hero.png'
import { Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide'

const CertificationSlide = () => {
    return(
        <div className="p-5">
            <h1 className="text-2xl text-center m-5" id="splide_header">Our Certifications</h1>
            <Splide aria-labelledby="splide_header" hasTrack={ false } options={ { perPage: '3', gap: '1rem', rewind: true, autoplay: true, type: "loop", resetProgress: false, pauseOnHover: false, arrows: false} }>
                <SplideTrack>
                    <SplideSlide><img src={image1}></img></SplideSlide>
                    <SplideSlide><img src={image1}></img></SplideSlide>
                    <SplideSlide><img src={image1}></img></SplideSlide>
                    <SplideSlide><img src={image1}></img></SplideSlide>
                    <SplideSlide><img src={image1}></img></SplideSlide>
                    <SplideSlide><img src={image1}></img></SplideSlide>
                </SplideTrack>
            </Splide>
        </div>
    );
}

export default CertificationSlide
