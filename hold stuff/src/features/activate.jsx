import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { activate } from '../features/sideNav';

function RouteChangeHandler() {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        // Extract the activated item from the pathname (e.g., '/products' => 'Products')
        let activatedItem = location.pathname
        if(activatedItem != '/'){
            activatedItem = location.pathname.replace('/', '');
        }
        dispatch(activate(activatedItem));
    }, [location, dispatch]);

    return null;
}

export default RouteChangeHandler;
