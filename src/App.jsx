import { useRef } from "react";
import Main from "./components/Main";
import Navbar from "./components/Nav";
import Alertmodal from "./Alertmodal";
import { useState } from "react";
import SearchSection from "./components/SearchSection";

import axios from "axios";

function App() {
  const sbox = useRef(null);
  const [getProps, setprops] = useState({});
  const [show, setShow] = useState(false);

  const h = new Headers({
    "User-Agent": "OpenISBNLookup/0.0.1 (itzz@duck.com)",
    accept: "application/json",
  });

  const b = "https://openlibrary.org/api";

  const handlclick = async (e) => {
    e.preventDefault();
    const val = sbox.current.value.trim();
    const m = `/books?bibkeys=${val}&format=json&jscmd=data`;
    console.log(m);

    axios({
      method: "GET",
      baseURL: b,
      url: m,
      headers: { ...h },
    })
      .then((res) => {
        console.log(res.data[val]);
        return res.data[val];
      })
      .then((data) => {
        setprops({
          title: data?.title,
          imgUrl: data?.cover.large,
          authors: Array.from(data.authors),
          pages: data.number_of_pages,
          pubD: data.publish_date,
          pubH: Array.from(data.publishers),
          olUrl : data?.url
        });
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div className="grid grid-flow-row">
      {show ? (
        <Alertmodal
          handleClick={() => {
            setShow(false);
          }}
        />
      ) : null}
      <Navbar />
      <SearchSection ref={sbox} handleClick={handlclick} />
      <Main
        title={getProps.title}
        imgUrl={getProps.imgUrl}
        authors={getProps.authors}
        pubH={getProps.pubH}
        pubD={getProps.pubD}
        pages={getProps.pages}
        olUrl={getProps.olUrl}
      />
    </div>
  );
}

export default App;
