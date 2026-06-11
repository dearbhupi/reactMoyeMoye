import React from 'react';

// Moving this outside prevents recreation on every render
const USER_DATA = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Alice Johnson", age: 28 },
  { name: "Bob Brown", age: 35 }
];

function UserData() {
  return (
    <div>
      {USER_DATA.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default UserData;