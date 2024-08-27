import React, {useEffect} from 'react'
import { useFetchCurtainsQuery } from '../Store/Api/CurtSlice';
import CurtainTile from './CurtainTile'
import { Link } from 'react-router-dom'

function Curtains() {
   
  const { data: allcurtains = [] } = useFetchCurtainsQuery();    


  return (
    <div className='relative'>
      <Link to = '/curtains/Addcurtains'> <button className='bg-slate-400 font-bold text-xl mt-9 ml-36 left-[18.3rem] top-[-1] p-1 rounded-lg h-24'>Add More Curtain + </button> </Link>
     
 <div className='grid grid-cols-2 lg:grid-cols-4 '>
            {allcurtains && allcurtains.length
              ? allcurtains.map((productItem) => ( <CurtainTile product={productItem} />

              ))
              : null}
          </div>
    </div>
  )
}

export default Curtains