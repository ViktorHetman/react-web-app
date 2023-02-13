import React from 'react'

function Button({type, title, disable, onClick}) {
  return (
    <div>
      <button disabled={disable} onClick={onClick}>
        {title}
      </button>
    </div>
  )
}

export default Button
