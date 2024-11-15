import React, { useEffect, useState } from 'react'
import { IProduct } from '../../models/IProduct';
import UrunCard from '../molecules/UrunCard';
import { useDispatch } from 'react-redux';
import { ProductDispatch, useAppSelector } from '../../store';
import { fetchGethAllProducts } from '../../store/feature/productSlice';

function UrunListesi() {
 const dispatch = useDispatch<ProductDispatch>();
 const liste = useAppSelector(gState=> gState.product.productList);
 const isLoding = useAppSelector(s => s.product.isProductListLoading)
  useEffect(()=>{
    console.log('merhabe dunya')
  dispatch(fetchGethAllProducts())
  },[])
 
  
  return (
    <div className="col p-3 rounded-3" style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
    <label className='form-label'>Ürün Listesi</label>
    <div className="row">
       {
        liste?.map((urun,index)=>{
          return<UrunCard key={index} urun={urun}/>
        })
       }
    </div>
</div>
  )
}

export default UrunListesi