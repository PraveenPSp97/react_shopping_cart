import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Pagination = ({ page, setpage, len }) => {
  // const [arr, setarr] = useState([...Array(3)]);
  useEffect(() => {
    console.log("inside nav");

    return () => {};
  }, []);

  return (
    <div className="pagination" sticky="bottom">
      <button
        className="normal page"
        onClick={() => {
          if (page > 1) setpage((prev) => prev - 1);
        }}
        disabled={page === 1}
      >
        <IoIosArrowBack />
      </button>

      <span>
        {[...Array(3)].map((_, i) => {
          return (
            <button
              key={i}
              className={page === i + 1 ? "active" : "normal"}
              onClick={() => setpage(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
      </span>
      <button
        className="normal page"
        onClick={() => {
          if (page < 3) setpage((prev) => prev + 1);
        }}
        disabled={page == 3}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};
