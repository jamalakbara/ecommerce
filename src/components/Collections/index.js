import { useState } from 'react';
import {Link} from 'react-router-dom';
import Paragraph from '../Paragraph';
import './collections.scss';

const colls = [
  {
    id: 1,
    name: 'New Arrival',
    image: 'https://placehold.jp/1078x768.png',
  },
  {
    id: 2,
    name: 'Sale this summer',
    image: 'https://placehold.jp/3d4070/ffffff/1078x768.png'
  },
  {
    id: 3,
    name: 'Basic t-shirts',
    price: '$29,99',
    image: 'https://placehold.jp/1078x768.png'
  },
]

const Collections = () => {
  const [flex, setFlex] = useState({
    1: 2,
    2: 1,
    3: 1,
  });
  const onMouseEnter = (e) => {
    e.preventDefault();
    const newFlex = {
      1: 1,
      2: 1,
      3: 1,
    };
    newFlex[e.target.id.replace('coll-', '')] = 2;
    setFlex(newFlex);
  }

  return (
    <div className="collections">
      {
        colls ? colls.map(item => (
          <div 
            key={item.id} 
            className="collections__item"
            id={`coll-${item.id}`}
            onMouseEnter={onMouseEnter}
            style={
              {
                backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5)), url(${item.image})`,
                flex: flex[item.id]
              }
            }
          >
            {item.name && (<Paragraph text={item.name} />)}
            {item.price && (<Paragraph text={item.price} />)}
            <Link to="/about" className="collections__link">
              show collection
            </Link>
          </div>
        )) : null
      }
    </div>
  )
}

export default Collections