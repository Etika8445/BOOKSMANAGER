import Bookshelf from '../../components/Bookshelf'
import Searchpage from '../../page/Searchpage'
import Navbar from './Navbar'
import { Route, Routes, Navigate} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Searchpage/>}/>
            <Route path='/bookshelf' element={<Bookshelf/>}/>  
            <Route path='*' element={<Navigate replace to='/'/>}/>
        </Routes>

    </>
  )
}

export default Header