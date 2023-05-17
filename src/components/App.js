import './App.css';

import { useEffect, useState } from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import UsersCardList from "./UsersCardList/UsersCardList";

import {
  getAllUsers,
  // getUserEducation, 
  // deleteMovie,
  // updateUserInfo,
  // getUsersMovies,
  // register,
  // login,

} from '../utils/MainApi';

function App() {
  console.count("RENDER Главной страницы")
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // console.count("RENDER Главной страницы") // пустой массив зависимостей - Render только при монтировании
    getAllUsers()
    .then((userData) => {
        setUsers(userData);
    })
    .catch((err) => {
        console.log(`ошибка получения данных по API при первичном обращении за пользователями ${err}`);
    })
}, [])
  // function getOneUserEducation (userId) {
  //   getUserEducation(userId)
  //     .then((userData) => {
  //       // console.log(userData);
  //       setEducation(userData);
  //     })
  //     .catch(err => console.log(`ошибка получения данных по API при первичном обращении за JБРАЗОВАНИЕМ ${err}`))
  // }
  return (
    <div className='app'>
        <Header />
        <UsersCardList 
          users={users}
          // onGetEducation={getOneUserEducation}
          />
        <Footer />
    </div>
  );
}

export default App;
