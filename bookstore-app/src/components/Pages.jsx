import Home from './Home'
import Genre from './Genre'
import Search from './Search'
 import { Route, Routes } from 'react-router-dom'
import Main from './Main'

const Pages = () => {
    return (
        <Routes>
            <Route path='/' and element={<Home />} />
            <Route path='/genre' and element={<Genre />} />
            <Route path='/:name' and element={<Main />} />
            <Route path='/genre/:name' and element={<Search />} />
        </Routes>
  )
}

export default Pages