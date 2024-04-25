import './App.css'
import Navbar from './components/Navbar'
import Homecontent from './components/Homecontent'
import './index.css'
import {useSelector} from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  // console.log(isLoggedIn);
  return (
    <>
      <Navbar />
      <Homecontent title="Get Started" link="/login"/>
      {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App
