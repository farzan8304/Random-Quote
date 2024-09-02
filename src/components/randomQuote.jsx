import { useState } from "react";
import axios from "axios";
import "../components/randomQuote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";

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
    <div className="2xl:w-2/3 lg:w-3/4 md:w-4/5 sm:w-5/6 w-11/12 font-mono text-darkBrowne dark:text-parchment">
      <p className="xl:h-60 lg:h-72 h-80 flex items-center justify-center sm:text-3xl text-2xl text-center pb-4">
        &ldquo; {quote.content}&nbsp;&rdquo;
      </p>
      <div className="sm:flex justify-between items-center p-4 border-t-2 border-darkBrowne dark:border-parchment">
        <span className="text-xl">- {quote.author}</span>
        <div className="text-2xl text-parchment text-center sm:m-0 mt-10 sm:block grid grid-cols-2">
          <button className="bg-kombuGreen dark:bg-parchment text-amber-50  dark:text-darkBrowne  rounded sm:m-2 mr-2 active:scale-9 hover:scale-105 transition ease-in-out delay-75">
            <a
              className="content-center block sm:h-10 h-12 sm:w-20 pt-1"
              href={`https://en.wikipedia.org/wiki/${quote.author}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faWikipediaW} />
            </a>
          </button>
          <button
            onClick={fetchRandomQuote}
            className="bg-darkBrowne rounded sm:h-10 h-12 sm:w-20 sm:m-2 ml-2 pt-1 active:scale-95 hover:scale-105 transition ease-in-out delay-75"
          >
            <FontAwesomeIcon icon={faArrowRightLong} style={{ fontSize: "" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
