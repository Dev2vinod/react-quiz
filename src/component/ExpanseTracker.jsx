import React from 'react'
import TableStripe from './Table'

const ExpanseTracker = () => {



  return (
    <>

    <div className='flex flex-col items-center gap-3 font-semibold bg-pink-400'>
        <h1>
        Expense tracker  

        </h1>

        <h2>
            Your Balance
        </h2>

        <h2>
           Rs {30000}
        </h2>
    </div>

    <div className='bg-blue-400 flex gap-7 items-center justify-around'>

        <div>
        <h2>
            Income
        </h2>
        <h2>
           Rs {900000}
        </h2>
        </div>


        <div>
        <h2>
            Expense
        </h2>
        <h2>
            Rs {5000}
        </h2>
        </div>
       

    </div>

    <div className='bg-orange-300 flex flex-col gap-3 items-center'>
        <h1>History</h1>
        <h1>Add New Transition</h1>

    </div>
    

        <TableStripe />
    
    </>
  )
}

export default ExpanseTracker