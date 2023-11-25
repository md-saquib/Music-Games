import React, { memo } from 'react'

const ChildUseCallback = (props) => {

    console.log('Child useCallback render--');
  return (
    <div> ChildUseCallback <br /><br />
        <button onClick={()=>props.user()}>Update Todos</button>
    </div>
  )
}

export default memo(ChildUseCallback)