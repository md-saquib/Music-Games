import React, { useState, useCallback } from 'react';
import ChildUseCallback from './ChildUseCallback';

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState('hello');

  const handleClick = useCallback(() => {
  console.log('count',count);
  setCount(count+1);
  }, []);

  const handleAddTodo = useCallback(() => {
    setTodos( 
    //   {
    //   id: 'hello'
    // }
    'how'
    );
  }, []);
  console.log('Parent useCallback render');


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <ul>
        
          {/* <li >{todos.id}</li> */}
          <li >{todos}</li>
      
      </ul>
     <ChildUseCallback user={handleAddTodo}/>
    </div>
  );
};