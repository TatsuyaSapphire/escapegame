import { Routes, Route } from 'react-router-dom'
import { Home} from '../pages'
import House from '../components/house'
import Hallway from '../components/Castle/hallway'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route  path="/loveu" element={<House/>} />
            <Route  path="/hallway" element={<Hallway/>} />
        </Routes>
    )
}