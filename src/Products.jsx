import React, { useContext, useState } from 'react';
import { apiValue } from './Data/AllData';

const Products = () => {
  const data = useContext(apiValue);
  const [search, setSearch] = useState('');

  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4" key={item.id}>
              <img src={item.images[1]} alt={item.title} className="img-fluid w-25"style={{width:'50px'}} />
              <h5>{item.title}</h5>
              <p>Rating: {item.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;