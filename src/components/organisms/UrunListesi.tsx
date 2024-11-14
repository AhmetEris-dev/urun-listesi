import React from 'react'
import { IProduct } from '../../models/IProduct';
import UrunCard from '../molecules/UrunCard';

function UrunListesi() {
    let urun: IProduct;
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>urun=data[0]);
  return (
    <div className="col p-3 rounded-3" style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
    <label className='form-label'>Ürün Listesi</label>
    <div className="row">
       <UrunCard/>
    </div>
</div>
  )
}

export default UrunListesi