import "./SearchBox.scss";
import { FormEvent } from "react";

type searchBoxProps = {
    searchTerm: string,
    handleSearchInput: (event: FormEvent<HTMLInputElement>) => void,
}

const SearchBox = ({searchTerm, handleSearchInput}:searchBoxProps) => {
  return (
    <>
        <input className="search-box" type="text" value={searchTerm} onInput={handleSearchInput} placeholder="Drink name"/>
      
    </>
  )
}

export default SearchBox
