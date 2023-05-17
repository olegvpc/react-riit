// import { useState, useEffect } from 'react'

import './UsersCardList.css';
import UserCard from '../UserCard/UserCard';

function UsersCardList({
  users,
  // onGetEducation,

  }) {
  console.count('RENDER card-list')

  const isEmptyList = users.length ? false : true;

  return (
    <section className='cards-list'>

          {isEmptyList ? (
            <p className='cards-list__message'>
              Ничего не найдено
            </p>
            ) : (
              <>
              <div className='cards-list__box'>
                {users.map(user => (
                  <UserCard
                      key={user.id}
                      user={user}
                      // onGetEducation={onGetEducation}

                    />
                  ))}
              </div>
            </>
            )

          }

    </section>
  );
}

export default UsersCardList;
