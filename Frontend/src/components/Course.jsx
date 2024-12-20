import React, { useEffect, useState } from "react";
import list from "../../public/list.json"
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  console.log(book)
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);  
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-black dark:text-white">
          Welcome to the{" "}
            <span className="text-[#2A33FE]"> Notes Store :)</span>
          </h1>
          <p className="mt-12 text-neutral-900">
          Dive into your semester materials, carefully curated for your learning needs. Select a
          module and access the resources you need to succeed.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
          <Link to="/">
            <button className="m-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Course;