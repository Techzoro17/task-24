import React, { useContext } from 'react'

import { PaymentContext } from '../Context/Paymentcontext'

const Payment = () => {
    const {total,cart,navigate}=useContext(PaymentContext)
  return (
    <div  className='  m-4 main-h  flex justify-between'>

        
        <div className='bg-slate-300 w-1/2'>
            <div className='  m-4 p-4'>
                <h2 className='text-3xl font-bold b-2'>Card Details</h2> 
                <div className='flex flex-col w-4/5 my-2 mx-auto'>
                    <label htmlFor="name" className='' >Card Holder's Name</label>
                    <input type="text" id='name' placeholder='Abdul Askar S' className='border-2 border-black p-2 rounded-lg'/>
                </div>

                <div className='flex flex-col w-4/5 my-2 mx-auto'>
                    <label htmlFor="number" className='' >Card Number</label>
                    <input type="text" id='number' placeholder='XXXX XXXX XXXX XXXX' className='border-2 border-black p-2 rounded-lg'/>
                </div>

                <div className='flex flex-col w-4/5 my-2 mx-auto'>
                    <label htmlFor="CVV" className='' >CVV Number</label>
                    <input type="text" id='CVV' placeholder='XXXX' className='border-2 border-black p-2 rounded-lg'/>
                </div>
                <div className=' flex  w-4/5  mx-auto'>            
                        <button className='bg-green-600 text-white w-full p-2 rounded-lg text-xl font-bold'>Pay({total})</button>
                </div>
                

            </div>


            
        </div >
        

        <div className='bg-slate-400 w-5/12 mx-8'>
            <div className=' h-full' >
                <h2 className='flex justify-center font-bold text-2xl w-full '>Cart</h2>
                <div className='h-4/5  overflow-auto'>
                    {cart.map((data,index)=>(
                        data.quan>0&&
                        
                        <div className='flex bg-white mx-10 my-2 justify-between p-4 rounded-2xl font-bold' key={index} >
                            
                            <h2>{data.name}</h2>
                            <div className='flex w-2/5 justify-evenly'>
                                <button >-</button>
                                <h2>{data.quan}</h2>
                                <button >+</button>
                            </div>
                            <p>{data.Amount}</p>
                            
                        </div>
                        
))}
                </div>
                <h2 className='flex justify-center font-bold text-2xl w-full '>Total:{total}</h2>
                <div className='w-full flex justify-center  '><button className='bg-green-600 w-11/12 p-2 text-white rounded-xl text-xl font-semibold  ' onClick={()=>{navigate("/")}}>Back to shopping</button></div>
            </div>
        </div>


    </div>
  )
}

export default Payment