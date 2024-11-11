import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,reset,decrement,incrementByAmount } from '../redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

  const handleIncrementAmount = ()=>{
    if(amount){
      //dispact action
      dispatch(incrementByAmount(+amount))
    }else{
      alert("Enter a valid Amount")

    }
  }
  return (
    <div style={{minHeight:'100vh'}} className='bg-dark text-white row'>
    <div className="col"></div>
    <div className="col-lg-5">
     <h1 className='text-center my-5'>Counter App</h1>
     <div className='border border-light rounded'>
       <h1 style={{fontSize:'100px'}} className='text-center  mt-5'>{count}</h1>
       <div className='d-flex justify-content-around my-5'>
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning text-light'>DECREMENT</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>
       </div>
       <div style={{margin:'10% 0px'}}>
        <input onChange={e=>setAmount(e.target.value)} style={{width:'23vw'}}  type="text" placeholder='Enter the amount to increment'  className='form-control ms-5 d-inline'/>
       <button onClick={handleIncrementAmount} className='btn btn-info ms-4  text-light'>INCREMENT BY <br />AMOUNT</button>
       </div>

     </div>
    </div>
    <div className="col"></div>
   </div>
  )
}

export default Counter