import React from 'react'

const List = ({ valueDelete, values }) => (
  <div>
    {values.map((value, index) => (
      <li key={index}>
        {value}
        <button onClick={() => valueDelete(value)}>-X-</button>
      </li>
    ))}
  </div>
)

export default List
