import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ProductDispatch } from '../../store'
import { fetchFindProducts } from '../../store/feature/productSlice';

function UrunArama() {
  const dispatch=useDispatch<ProductDispatch>();
  //const [search,setSearch]=useState('');
  let ara='';
  const click=()=>{
    if(ara.trim()){
      dispatch(fetchFindProducts(ara))
    }
  }
  return (
    <div className="col p-3 rounded-3" style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
        <label className='form-label'>Ürün Arama</label>
        <div className="row">
            <div className="col-10">
                <input onChange={(evt)=>ara=(evt.target.value)} type="text" className='form-control' />
            </div>
            <div className="col-2 d-grid">
                <input onClick={click} type="button" value="Ara" className='btn btn-warning' />
            </div>
        </div>
    </div>
    
  )
}

export default UrunArama