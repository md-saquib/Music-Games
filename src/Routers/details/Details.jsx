// import React, { useState, useEffect } from 'react'
// import { Form, useNavigate, useParams } from 'react-router-dom'
// import './Details.css'
// // import {  IoIosArrowBack, IoIosArrowForward} from 'react-icon';
// // import { AiOutlineStar } from "react-icons/ai";

// export const Details = () => {
//   const navigate = useNavigate();
//   const params = useParams()
//   // console.log(params)

//   const [first, setfirst] = useState({});
//   const [images, setimages] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${params.id}`)
//       .then((res) => {
//         return res.json()
//       })
//       .then((data) => {
//         setfirst(data);
//         setimages(data.images)
//       })
//   }, [])
//   return (
//     <>
//       <div className="container d-flex ">
//         <div className="crousel-img">
//           {images.map((el, i) => <img src={el} key={i} style={{ left: `${i * 100}%`, transform: `translateX(-${count * 100}%)` }} className='img' />)}
//           <i className='fa-solid fa-forward fa-2xl forword' style={{ color: '#b4b7bb' }}
//             onClick={() => {
//               if (count > 0) { setCount(count - 1) }
//               else { setCount(images.length - 1) }
//             }} ></i>
//           <i className='fa-solid fa-backward  backword' style={{ color: '#b4b7bb' }}
//             onClick={() => {
//               if (count > 0) { setCount(count - 1) }
//               else { setCount(images.length - 1) }
//             }} ></i>

//           <div>
//             <button className='btn btn-success buynow'>Buy Now</button>
//             <button className='btn btn-warning  addtocart '>Add To Cart</button>
//           </div>
//         </div>
//         <div className="mt-5 ms-3">
//           <h3>{first.title}</h3>
//           <p className='bg-success p-1  rounded-3' style={{ width: '3.8rem' }}>{first.rating} <i className="fa-solid fa-star "></i></p>
//           <div className='d-flex justify-content-start w-50'>
//             <h2>{`$${first.price}`}</h2><h6 className='pt-2 px-2'><s>{`$${first.price + 401}`}</s></h6> <h6 className='pt-2'>{`${100 - Math.floor((first.price / (first.price + 401)) * 100)}% Off`}</h6>
//           </div>
//           <h6>{first.stock} <span className={first.stock > 20 ? 'text-success' : 'text-danger'}>Left</span></h6>
//           <h2>{first.brand}</h2>
//           <h6>{first.description}</h6>
//           <div>
//             <button className='btn btn-dark' onClick={() => navigate('/')}>Go to Home</button>
//           </div>

//         </div>
//       </div>
//     </>
//   )
// }

// {/* <i class="fa-solid fa-forward fa-2xl" style="color: #8f8f8f;"></i> */ }


