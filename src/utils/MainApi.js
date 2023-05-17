import { API_URL } from './constants';
// const token = () => localStorage.getItem('jwt');

function getResponse(res) {
  // console.log(res) // {type: 'cors', url: 'http://localhost:4000/users/me', redirected: false, status: 200, ok: true,…}
  // console.log(res.json())
  //   if(res.ok) {
  //     return res.json();
  //   }
  //   return Promise.reject(res.json());
  return res.ok ? res.json() : res.json().then((err) => Promise.reject({message: err.message, status: res.status}))
}

  // Получение сохраненных пользователем фильмов
export const getAllUsers = () => {
  return fetch(`${API_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    return getResponse(res)
  });
}


//метод удаления карточки пользователя с сервера
export const getUserEducation = (userId) => {
  return fetch(`${API_URL}/education/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    return getResponse(res)
  });
}



  // Получение данных о пользователе
export const getUserCities = (userId) => {
  return fetch(`${API_URL}/cities/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    return getResponse(res)
  });
}

export const saveUserEducation = (userId, education) => {
  return fetch(`${API_URL}/education/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      education,
    })
  })
  .then((res) => {
    return getResponse(res)
  });
}


// export const register = (name, email, password) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({name, email, password})
//   })
//   .then((res) => {
//     // console.log(res) // Response {type: 'cors', url: 'https://auth.nomoreparties.co/signup', redirected: false, status: 201, ok: true,
//     return getResponse(res)
//   })
// };

// export const login = (email, password) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({email, password})
//   })
//   .then((res) => {
//     return getResponse(res)
//   })
// }

// export const verifyToken = (token) => {
//   // console.log(`токен из LocalStorage ${token}`)
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization" : `Bearer ${token}`
//     }
//   })
//   .then((res) => {
//     return getResponse(res)
//   })
// }