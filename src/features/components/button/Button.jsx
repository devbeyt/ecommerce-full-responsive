import React from 'react'


function Button({text,signIn,signUp}) {
  return (
    <button type='button' className={`${signUp} ${signIn}`}>{text}</button>
  )
}

export default Button