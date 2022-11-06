import React, { useState } from 'react';

const User = ({ userData, updateUser }) => {
  const [firstName, setFirstName] = useState(userData.name.first);
  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (formData.get('first-name')) {
      const name = { ...userData.name, first: formData.get('first-name') };
      updateUser({ ...userData, name });
    }
  };

  const firstNameChangeHandler = (e) => {
    let v = e.target.value.trim();
    if (v) {
      setFirstName(v);
    }
  };
  const fullName = `${userData.name.title} ${firstName} ${userData.name.last}`;
  return (
    <section className="user">
      <h2>{fullName}</h2>
      <form name="edit-user" onSubmit={submitHandler}>
        <label>
          first name:
          <input
            name="first-name"
            value={firstName}
            onChange={firstNameChangeHandler}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </section>
  );
};

export default User;
