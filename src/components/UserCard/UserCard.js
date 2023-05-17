import { useEffect, useState } from 'react';
import './UserCard.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';

import {
  getUserEducation,
  getUserCities,
  saveUserEducation,
} from '../../utils/MainApi';

function UserCard({ user }) {
  console.count(`RENDER ${user.name}`)

  // eslint-disable-next-line
  const {values, errors, isValid, handleChange, setValues, setIsValid} = useFormAndValidation();

  const [showEducation, setShowEducation] = useState(false);
  const [showCities, setShowCities] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [education, setEducation] = useState('-')
  const [cities, setCities] = useState('-')

  // блокируем кнопку отправки формы если значения в input и базе одинаковые
  useEffect(() => {
    if (education === values.education) {
      setIsValid(false);
    }
  }, [setIsValid, values, education]);
  

  //обработчик клика по кнопке показа образования
  function handleShowEducation(userId) {
    setShowEducation((prev) => !prev);
    if(!showEducation) {
      getUserEducation(userId)
      .then((userData) => {
        console.log(userData);
        setEducation(userData?.education);
        setValues({
          education: userData?.education,
        });
      })
      .catch(err => console.log(`ошибка получения данных по API при обращении за ОБРАЗОВАНИЕМ ${err}`))
    }
  }

  function handleShowCities(userId) {
    setShowCities((prev) => !prev);
    if(!showCities) {
      getUserCities(userId)
      .then((userData) => {
        // console.log(userData);
        setCities(userData?.cities);
      })
      .catch(err => console.log(`ошибка получения данных по API при обращении за ГОРОДАМИ ${err}`))
    }
  }
  function handleEditEducation(userId){
    setIsEdit((prev) => !prev);
    if(isEdit){
      setValues({
        education: education,
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('SAVE')
    saveUserEducation(user.id, values.education)
    setIsEdit(false)
    setEducation(values.education)
  }


  return (

    <article className='user-card'>
      <div className='card'>
        <div className='card__header'>
          <div className='card__info'>
            <h2 className='card__title'>{user.name}</h2>
            <p className='card__id'>ID: {user.id}</p>
          </div>
          <div className='card__icons'>

            <button
              className={`card__btn
              ${showEducation ? 'card__education-btn_active' : 'card__education-btn_passive'}`}
              type='button'
              aria-label='Показать образование'
              onClick={() => handleShowEducation(user.id)}
            />

            <button
              className={`card__btn
              ${showCities ? 'card__city-btn_active' : 'card__city-btn_passive'}`}
              type='button'
              aria-label='Показать города'
              onClick={() => handleShowCities(user.id)}
            />
          </div>

        </div>
      </div>

      {showEducation && (
        <div className='card'>
          <form className='card__header' onSubmit={handleSubmit} >
            {/* <div className='card__info'> */}
              <label for='education' className='card__info'>ОБРАЗОВАНИЕ
                <input 
                className='card__input' 
                value={values?.education || ''}
                onChange={handleChange}
                type='text'
                name='education'
                minLength='2'
                maxLength='50'
                required
                title='Разрешено использовать латиницу, кириллицу, пробел или дефис'
                pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
                id='education'
                disabled={!isEdit}
                />
              </label>
            {/* </div> */}
            <div className='card__icons'>

              <button
                className={`card__btn
                ${isEdit ? 'card__cancel-btn' : 'card__edit-btn'}`}
                type='button'
                aria-label='Редактировать образование'
                onClick={() => handleEditEducation(user.id)}
              />

              {isEdit && (
                <button
                className='card__btn card__save-btn'
                type='submit'
                disabled={!isValid} 
                aria-label='Cохранить новое значение образования'
              />
              )}
            </div>
          </form>
        </div>
      )}
      {showCities && (
        <div className='card'>
        <div className='card__header'>
          <div className='card__info'>
            <h2 className='card__title'>ГОРОДА</h2>
            <p className='card__id'>{cities}</p>
          </div>
        </div>
      </div>
      )}

    </article>
  );
}

export default UserCard;
