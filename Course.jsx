import React, { useEffect, useState } from "react";
import Cards from "./Cards";
// import list from "../../public/list.json";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
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
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 my-0 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We' re delighted to have you here!
            <span className="text-pink-500">Here !</span>
          </h1>
          <p className="mt-12">
            "A bookstore is one of the only pieces of evidence we have that
            people are still thinking." - Jerry Seinfeld "I love walking into a
            bookstore. It's like all my friends are sitting on shelves, waving
            their pages at me."  "Bookstores are time machines,
            spaceships, story-makers, secret-keepers. They are dragon-tamers,
            dream-catchers, fact-finders, and safe places." - 
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-3 mx-10">
          {book.map((item) => (
            <Cards key={item.id} item={item}></Cards>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
