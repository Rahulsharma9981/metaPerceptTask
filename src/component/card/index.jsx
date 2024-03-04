import React from "react";
import { Link } from "react-router-dom";

const Card = ({value}) => {
  return (
    <div class="card" style={{width:"18rem"}}>
      <img class="card-img-top" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{value.ID}</h5>
        <p class="card-text  ">
        This course focuses on deepening the knoweldge of technical content
        </p>
       <Link className="btn btn-primary" to={`/card-details/${value.ID}`}>
       View More
       </Link>
      </div>
    </div>
  );
};

export default Card;
