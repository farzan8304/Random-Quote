import React, { useState } from "react";
import axios from "axios";
import "../components/randomQuote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    content: "If you want to shine like sun, first you have to burn like it.",
    author: "Adolf Hitler",
  });

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      const { content, author } = response.data;
      setQuote({ content, author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="container content-center lg:h-1/2 h-1/3 m-4 lg:px-28 sm:px-16 p-3 bg-gray-900 rounded-lg outline outline-1 outline-white md:outline-offset-8 outline-offset-4 text-white font-mono select-none">
      <p className="border-b md:pb-8 pb-5 md:mb-8 mb-5 text-center lg:text-3xl text-lg">
        "{quote.content}"
      </p>
      <div className="flex justify-between md:px-5 p-0 lg:text-xl text-sm lg:h-10 h-7">
        <span className="content-center">- {quote.author}</span>
        <span className="leading-none flex content-center">
          <button
            onClick={fetchRandomQuote}
            className="md:mr-2 m-0 lg:w-24 md:w-16 w-10 rounded-lg transition ease-in-out delay-75 bg-green-600 hover:bg-emerald-800 duration-300"
          >
            <FontAwesomeIcon icon={faRefresh} />
          </button>
          <button className="ml-2 lg:w-24 md:w-16 w-10 rounded-lg transition ease-in-out delay-75 bg-blue-600 hover:bg-indigo-800 duration-300">
            <a
              className="block content-center lg:h-10 h-7"
              href={`https://en.wikipedia.org/wiki/${quote.author}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWikipediaW} />
            </a>
          </button>
        </span>
      </div>
    </div>
  );
};

export default RandomQuote;
