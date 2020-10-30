import React from 'react';

export default function Header({ title, children }) { /* props */
  return(
    <header>
      <h1>{title}</h1>

      {children}
    </header>
  ); /* <h1>{props.title}</h1> */
}