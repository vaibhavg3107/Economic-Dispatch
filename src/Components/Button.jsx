import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button type="button" onClick={props.handleClick} class="btn btn-secondary btn-sm mx-2">Submit</button>
    </div>
  )
}
