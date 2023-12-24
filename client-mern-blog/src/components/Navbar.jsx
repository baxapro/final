import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

export const Navbar = () => {
    const isAuth = useSelector(checkIsAuth);
    const dispatch = useDispatch();

    const activeStyles = {
        color: 'red',
        fontWeight: 'bold',
    };

    const logoutHandler = () => {
        dispatch(logout());
        window.localStorage.removeItem('token');
        toast('Вы вышли из системы');
    };
    const { user } = useSelector((state) => state.auth)




    return (
        <div className='flex py-4 justify-between items-center text-white'>
            <Link style={{ marginLeft: '100px' , marginRight: '150px'}} to={'/'} className='w-10 h-6   text-2xl text-amber-200 rounded-sm'>
                IBLOG
            </Link>
            <div className='flex items-center mx-auto '>


                {isAuth && (
                    <ul className='flex gap-12 ml-4'>
                        <li>
                            <NavLink
                                to={'/'}
                                className='text-sm hover:text-white'
                                activeStyle={activeStyles}
                            >
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/posts'}
                                className='text-sm hover:text-white'
                                activeStyle={activeStyles}
                            >
                                Мои посты
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/new'}
                                className='text-sm hover:text-white'
                                activeStyle={activeStyles}
                            >
                                Добавить пост
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>

            <div style={{ marginLeft: '150px' , marginRight: '100px'}} className='flex items-center bg-slate-500 text-sm text-white rounded-sm px-4 py-2'>
                {isAuth ? (
                    <div className="relative inline-block text-left">
                        <button

                            className="text-white  hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            onClick={logoutHandler}
                        >
                            {user ? (
                                <>
                                    {user.username}
                                    <svg width="20px" height="18px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"></path> </g></svg>


                                </>
                            ) : <Link to={'/login'} > Войти </Link>}


                        </button>

                    </div>
                ) : (
                    <Link to={'/login'} > Войти </Link>
                )}
            </div>
        </div>
    );
};
