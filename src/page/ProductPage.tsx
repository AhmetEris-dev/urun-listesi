import React from 'react'
import UrunArama from '../components/molecules/UrunArama'
import UrunListesi from '../components/organisms/UrunListesi'

function ProductPage() {
  return (
    <div className="container">
        <div className="row justify-content-center mt-4">
            <div className=" border">
              <div className="row">
                <UrunArama />
              </div>
              <div className="row">
                <UrunListesi/>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProductPage