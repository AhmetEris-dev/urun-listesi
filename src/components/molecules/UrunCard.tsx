import React from 'react'
import { IProduct } from '../../models/IProduct'
interface IUrunCardProps{
    urun: IProduct
}
function UrunCard() {
    const urun ={
        thumbnail: 'https://picsum.photos/100/100',
        category: 'spor',
        title: 'piskuvi',
        price: 100
    }
  return (
    <div className="col-4 mt-3">
        <div className="card">
            <div className='p-3'>
                <img src={urun.thumbnail} className="card-img-top"  />
            </div>
            <div className="card-body">
                <h5 className="card-title">{urun.category}</h5>
                <p className="card-text">{urun.title}</p>
                <p className="card-text">{urun.price} $</p>
                <div className="d-grid">
                    <input type="button" value="Sepete Ekle" className='btn btn-outline-info' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default UrunCard