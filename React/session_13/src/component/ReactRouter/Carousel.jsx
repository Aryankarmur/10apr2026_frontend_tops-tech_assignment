import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{display:"flex", placeSelf:"center", width:"95%"}}
    >
      <div className="carousel-inner" style={{height:"400px", width:"100%", }}>
        <div className="carousel-item active h-100" data-bs-interval="2000">
          <img src="https://img.magnific.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80" className="d-block w-100 h-100 object-fit-cover" alt="..." />
        </div>
        <div className="carousel-item h-100" data-bs-interval="2000">
          <img src="https://img.magnific.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80" className="d-block w-100 h-100 object-fit-cover" alt="..." />
        </div>
        <div className="carousel-item h-100" data-bs-interval="2000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1a3iA8eqCsB_s3Yh8XJDVgN4H1KCwnuaqegb-YG-ynm2uEXXS2smE68B&s=10" className="d-block w-100 h-100 object-fit-cover" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
