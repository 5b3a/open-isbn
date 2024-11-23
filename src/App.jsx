import { useRef } from "react";
import Main from "./components/Main";
import Navbar from "./components/Nav";
import Alertmodal from "./Alertmodal";
import { useState } from "react";
import SearchSection from "./components/SearchSection";

import axios from "axios";
import { useEffect } from "react";
import { baseUrl, headers, resultUrl } from "./config/config";
import AboutIsbn from "./components/AboutIsbn";

function App() {
  const sbox = useRef(null);
  const [getProps, setprops] = useState({});
  const [show, setShow] = useState(false);

  const handlclick = async (e) => {
    e.preventDefault();

    if (sbox.current.value.length < 1) {
      setShow(true);
      return;
    }

    const isbnValue = sbox.current.value.trim().replace(/[^\w\s]/gi, "");
    sbox.current.value = isbnValue;
    const apiUrl = resultUrl(isbnValue);

    axios({
      method: "GET",
      baseURL: baseUrl,
      url: apiUrl,
      headers: { ...headers },
    })
      .then(async (res) => {
        const data = await res.data[isbnValue];
        console.log(data);

        setprops({
          title: data?.title,
          imgUrl: data?.cover.large,
          authors: Array.from(data.authors),
          pages: data.number_of_pages,
          pubD: data.publish_date,
          pubH: Array.from(data.publishers),
          olUrl: data?.url,
        });
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div className="grid min-h-svh grid-flow-row grid-rows-[auto_auto_1fr]">
      {show ? (
        <Alertmodal
          handleClick={() => {
            setShow(false);
          }}
        />
      ) : null}
      <Navbar />
      <SearchSection ref={sbox} handleClick={handlclick} />
      {getProps?.title ? (
        <Main
          title={getProps.title}
          imgUrl={getProps.imgUrl}
          authors={getProps.authors}
          pubH={getProps.pubH}
          pubD={getProps.pubD}
          pages={getProps.pages}
          olUrl={getProps.olUrl}
        />
      ) : (
        <AboutIsbn />
      )}
    </div>
  );
}

export default App;
