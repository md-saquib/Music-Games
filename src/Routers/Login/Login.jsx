import React, { useContext, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { userinfo } from '../authContext/AuthContext';

export const Login = () => {
  const location = useLocation()
  const loggedinUser = useContext(userinfo)
  console.log('login',location);
  const navigate = useNavigate();
  const nameRef = useRef();
  const passwordRef = useRef();

  // const [userInfo, setUserInfo] = useState({
  //   userName: '',
  //   password: ''
  // });

  const handler = (e) => {
    e.preventDefault();
    // setUserInfo({
    //   userName: nameRef.current.value,
    //   password: passwordRef.current.value
    // })
    
    loggedinUser.setfirst({
      userName: nameRef.current.value,
      password: passwordRef.current.value
    });
    navigate(location.state.location)
  }
  return (
    <>
      <div className="container-fluid">


        <form onSubmit={handler} className='w-50 m-auto'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" ref={nameRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>

    </>
  )
}
