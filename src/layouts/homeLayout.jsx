
import SideNav from '../Components/sideNav';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <div className='homeLayout flex flex-row flex-1 w-[100%]'>
        <div className='sideLayout sticky top-[0px] flex-1 max-w-[19%] max-h-screen'>
          <SideNav/>
        </div>
        <div className='mainLayout w-[100%]  '>
        <Outlet/>
        </div>
        
    </div>
  )
}

export default HomeLayout