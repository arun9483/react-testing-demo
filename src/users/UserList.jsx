import React, { useState, useEffect, useCallback } from 'react';

import User from './User';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchUsers() {
      const USERS_COUNT = 5;
      const SEED = 'SEED';
      try {
        const url = `https://randomuser.me/api/?results=${USERS_COUNT}&seed=${SEED}`;
        const res = await fetch(url, {
          signal: controller.signal,
        });

        const data = await res.json();
        setUsers(data.results);
      } catch {
        console.error('uanble to fetch users');
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
    };
  }, []);

  const updateUser = useCallback(
    (payload) => {
      // console.log('updateUser called with, ', payload);
      const updatedList = users.map((item) => {
        if (item.email !== payload.email) {
          return item;
        } else {
          return {
            ...item,
            ...payload,
          };
        }
      });
      setUsers(updatedList);
    },
    [users]
  );

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.email}>
          <User userData={user} updateUser={updateUser} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
