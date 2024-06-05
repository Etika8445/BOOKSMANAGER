import Card from "./Card";
import propTypes from "prop-types";
const Bookshelf = () => {
  const data=JSON.parse(localStorage.getItem('cart'));                     //Gettting data from localstorage
  // console.log(data);
  return (
    <>
    <center><h1>My Bookshelf</h1></center>
    {data===null?                   
    <p></p>:
    (<div className='layout-Cardpage'>
      {data.map((item,key) => {
        return <Card key={key} title={item.current.title} count={item.current.count} />
      })}
    </div>)}
    </>
  )
}
Bookshelf.propTypes={
    allBooks:propTypes.array
  }
export default Bookshelf