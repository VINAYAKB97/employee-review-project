import React, { useState } from "react";
import Reviews_data from "../data";
import "./index.css";
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Reviews = () => {
  const [index, setindex] = useState(0);

  const { name, job, image, text } = Reviews_data[index];

  const checknumber = (number) => {
    if (number > Reviews_data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Reviews_data.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setindex((index) => {
      let newIndex = index + 1;
      return checknumber(newIndex);
    });
  };

  const preperson = () => {
    setindex((index) => {
      let newIndex = index - 1;
      return checknumber(newIndex);
    });
  };

  const suprise = () => {
    let randomPerson = Math.floor(Math.random() * Reviews_data.length);
    if (randomPerson === index) {
      randomPerson = index + 1;
    }
    setindex(checknumber(randomPerson));
  };

  return (
    <article className="reviews">
      <div className="img-container">
        <img src={image} alt="img" height={"100px"}></img>
      </div>
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{text}</p>
      <button onClick={preperson} id="next-btn">
        {<FaAngleLeft />}
      </button>
      <button onClick={nextPerson} id="pre-btn">
        {<FaAngleRight />}{" "}
      </button>

      <div className="suprise-btn">
        <button onClick={suprise} id="suprise">
          suprise
        </button>
      </div>
    </article>
  );
};

export default Reviews;
