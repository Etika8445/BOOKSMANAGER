import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
const Card = ({ key, title, count }) => {

  const newItemRef = useRef({ title: "", count: 0 });             //useRef Hook
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = (title, count) => {                           //Storing data using localstorage
    newItemRef.current = { title, count };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updated = [...cart, newItemRef];
    localStorage.setItem('cart', JSON.stringify(updated));
    setIsAdded(true);                                             // Update the state to indicate the item is added
    // console.log(cart);
  };

  useEffect(() => {
                                                                   // Check if the item is already in the cart when the component mounts
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemInCart = cart.some(item => item.current.title === title);
    if (itemInCart) {
      setIsAdded(true);
    }
  }, [title]);

  return (
                                                                      // showing data in structured form 
    <div className="card-layout" key={key}>
      <div className="card-title">
        <p className="card-book">Book Title:</p>
        <div className="card-tname">{title}</div>
      </div>
      <div className="card-title">
        <p style={{fontWeight:"700"}}>Edition Count:</p>
        <div style={{ paddingTop: "16px", paddingLeft: "2px" }}>{count}</div>
      </div>
      {!isAdded && <div className="card-button"><button onClick={() => { addToCart(title, count) }}>Add to Bookshelf</button></div>}
    </div>
  );
};

Card.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  count: PropTypes.number
};

export default Card;
