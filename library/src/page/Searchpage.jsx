import { useEffect, useState } from 'react';
import { getdata } from '../services/api-client';
import Allcards from '../components/Allcards';
import Search from '../components/Search';
const Searchpage = () => {
  const[titlename,settitlename]=useState(null);
    const [allBooks, setBooks] = useState([]);
 const loadBooks = async () => {
    setBooks(await getdata({titlename}));
  }
  useEffect(() => {
    loadBooks();
  }, [titlename])
  return (
    <>
      <Search settitlename={settitlename}/>
    <Allcards allBooks={allBooks}/>
    </>
  )
}

export default Searchpage