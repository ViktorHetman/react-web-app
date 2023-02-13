import React from 'react'

function Button({type, title, disable}) {
  return (
    <div>
      <button disabled={disable}>
        {title}
      </button>
    </div>
  )
}

export default Button
