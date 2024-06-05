import { useRef } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Search = ({ settitlename }) => {
    const bookTitle = useRef();   //searching book using useRef
    const navigate = useNavigate();
    const Gobookshelf = () => {
        navigate('/bookshelf');
    }
    return (
        <>
            <div className="search-layout">
                <center><h1> Search by book name:</h1>
                <input ref={bookTitle} type='text' onChange={() => { settitlename(bookTitle.current.value); }} /></center>
            </div>
            <div className="bookshelf-button"><button onClick={() => Gobookshelf()}>My Bookshelf</button></div>
        </>
    )
}
Search.propTypes = {
    settitlename: propTypes.func
}
export default Search