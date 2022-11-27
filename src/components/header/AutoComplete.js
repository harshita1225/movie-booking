import React, { useContext } from "react";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Context } from "../../context/Context";
import { Link, useNavigate } from "react-router-dom";

function AutoComplete() {
  const { state } = useContext(Context);
  const navigate = useNavigate();
  const items = [
    {
      id: 0,
      name: "",
    },
    {
      id: 1,
      name: "Ticket to Paradise",
    },
    {
      id: 2,
      name: "The Menu",
    },
    {
      id: 3,
      name: "She Said",
    },
    {
      id: 4,
      name: "Black Panther: Wakanda Forever",
    },
    {
      id: 5,
      name: "Lyle, Lyle, Crocodile ",
    },
    {
      id: 6,
      name: "Guillermo del Toro's Pinocchio",
    },
    {
      id: 7,
      name: "Prey For The Devil",
    },
    {
      id: 8,
      name: "The Banshees of Inisherin ",
    },
    {
      id: 9,
      name: "Strange World ",
    },
    {
      id: 10,
      name: "Devotion ",
    },
    {
      id: 11,
      name: "The Chosen ",
    },
    {
      id: 12,
      name: "Black Adam ",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
  };

  const handleOnSelect = (item) => {
    navigate(`/home/${item.id}`);
  };

  const handleOnFocus = () => {};

  const formatResult = (item) => {
    return (
      <>
        {/* <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span> */}
        <span
          onclick={() => navigate("/datetime")}
          style={{ display: "block", textAlign: "left", zIndex: 5 }}
        >
          {item.name}
        </span>
      </>
    );
  };

  return (
    <div className="App z-10">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            style={{ zIndex: 9999 }}
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder="Search current movie..."
          />
        </div>
      </header>
    </div>
  );
}

export default AutoComplete;
