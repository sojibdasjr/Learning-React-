/* eslint-disable react/prop-types */

export default function Singer( {singer} ) {
    const { name, age} = singer
  return (
    <>
      <li>Singer name: {name}</li>
      <li>Singer age: {age}</li>
    </>
  );
}

