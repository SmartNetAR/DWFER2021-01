import { useState } from "react";

const Search = () => {
  const [buscar, setBuscar] = useState("");

  const handleChange = (event) => {
    const {name, value} = event.target;

    setBuscar({
        [name]: value
    });
  };

  const handleClick = () =>
  {
    
  }

  return (
    <>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
          Buscar
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control-plaintext"
            name="buscar"
            onChange={handleChange}
            value={buscar}
          />
        </div>
      </div>
        <button type="button"
            onClick={handleClick}>Ver Estado
        </button>
    </>
  );
};

export default Search;
