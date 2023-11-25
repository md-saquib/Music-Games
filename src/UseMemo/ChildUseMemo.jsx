import React, { memo } from 'react'

const ChildUseMemo = (props) => {

    console.log('Render Child useMemo');

  return (
    <div>
        <h2>ChildUseMemo</h2>
        <p>Name: {props.user.name}</p>
        <p>Rple: {props.user.role}</p>


        
    </div>
  )
}

export default memo(ChildUseMemo)