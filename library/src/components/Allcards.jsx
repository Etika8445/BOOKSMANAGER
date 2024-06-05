import Card from "./Card"
import propTypes from "prop-types";
const Allcards = ({allBooks}) => {
    return(
      <>
      <div className='layout-Cardpage'>
        {allBooks.map((item) => {
          return <Card key={item.cover_i} title={item.title} count={item.edition_count} />
        })}
      </div>
      </>
    )
}
Allcards.propTypes={
  allBooks:propTypes.array
}
export default Allcards