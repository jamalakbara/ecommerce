import Slider from "react-slick";
import {Link} from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import './carrousel.scss';

const carrousel_data = [
  {
    id: 1,
    title: 'Sale of the summer collection',
    link: '/about',
    image: 'https://placehold.jp/1078x768.png'
  },
  {
    id: 2,
    title: 'Sale of the summer collection',
    link: '/about',
    image: 'https://placehold.jp/3d4070/ffffff/1078x768.png'
  }
]

const Carrousel = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div className='carrousel'>
      <Slider {...settings}>
        {
          carrousel_data.map(item => (
            <div key={item.id}>
              <div 
                className="carrousel__section"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5)), url(${item.image})`
                }}
              >
                {
                  item.title ? (
                    <h1>
                      {item.title}
                    </h1>
                  ) : null
                }
                {
                  item.link ? (
                    <Link to="/about" className="carrousel__link">
                      <div className="carrousel__svg">
                        <FaLongArrowAltRight />
                      </div>
                      <p>Shop Now</p>
                    </Link>
                  ) : null
                }
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default Carrousel