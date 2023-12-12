import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../Redux/Actions";
import Header from "./PageModel/Header";
import Card from "./AllCards/Card";

const Search = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.characters); // Accede al estado de Redux

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterUsers = (user) => {
    if (!search) {
      return true;
    }

    const userName =
      typeof user.name === "string"
        ? user.name.toLowerCase()
        : `${user.name.forename} ${user.name.surname}`.toLowerCase();

    return userName.includes(search.toLowerCase());
  };

  useEffect(() => {
    dispatch(getCharacters()); // Dispatch la acción para obtener los personajes
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className="center-input-container">
        <input
          className="center-input"
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Search"
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '150px' }}>
        {users.filter(filterUsers).map((user) => (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            number={user.number}
            code={user.code}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
