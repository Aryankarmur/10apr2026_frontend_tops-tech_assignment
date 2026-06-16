import React from 'react'
import "../assets/css/ProductCard.css";
import PropTypes from 'prop-types';

const ProductCard = ({img_url, p_name, p_price}) => {
  return (
    <div className='product_main'>

    <div className="prd_img">
        <img src={img_url} alt="" />
    </div>
    <p className="p_name">{p_name}</p>
    <p className="p_price"> price : ₹{p_price}</p>
    </div>
  )
}

ProductCard.PropTypes = {
  p_name: PropTypes.string.isRequired,     // Must be a string, cannot be omitted
  p_price: PropTypes.Number, 
  };

export default ProductCard