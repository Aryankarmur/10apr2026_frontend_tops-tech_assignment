import React from "react";

const Card = ({image, title, price, desc}) => {
  
  return (
  
    <div className="card" style={{ width: "18rem" }}>
      <div style={{height:"250px" }}>
        <img
          src={image}
          className="card-img-top h-100 w-100 object-fit-contain"
          alt="..."
        />
      </div>
      <div className="card-body w-100">
        <h5 className="card-title">{`${title.slice(0,20)}...`}</h5>
        <p className="card-text">${price}</p>
        <p className="card-text">
         {`${desc.slice(0,40)}...`}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
