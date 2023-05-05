import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../css/marketplacefilter.css'
const MarketPlaceFilter = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      { !show &&<>
        <button className='filter-btn' onClick={handleShow}>
      <i className="fa-solid fa-angles-right"></i>
      </button>
      <p className='filter-text'>Filters</p>
      </>
      }

      <Offcanvas show={show} onHide={handleClose} className="sidenav-filter">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Customize your choices</Offcanvas.Title>
        </Offcanvas.Header>
        <Button className='filter-offcanvas-btn' onClick={()=>setShow(false)}>Apply</Button>
        <Offcanvas.Body>
            <form action="">
            <h5>Price Range</h5>
            <div className='market-place-price-filter mt-3'>
                <p className='filter-head'>Min</p>
                <input type="text" className='filter-value' onChange={(e)=>e.target.value}/>
                <p className='filter-head'>to</p>
                <input type="text" className='filter-value' onChange={(e)=>e.target.value}/>
                <p className='filter-head'>Max</p>
            </div>
            <h5>Category Pick</h5>
            <div className='market-place-category-filter mt-2'>
                <div>
                <input type='checkbox' className='category-filter-head'/>
                <label className='category-filter-value'>Milk Plant</label>
                </div>
                <div>
                <input type='checkbox' className='category-filter-head'/>
                <label className='category-filter-value'>Curd Plant</label>
                </div>
                <div>
                <input type='checkbox' className='category-filter-head'/>
                <label className='category-filter-value'>Paneer Plant</label>
                </div>
                <div>
                <input type='checkbox' className='category-filter-head'/>
                <label className='category-filter-value'>Yogurt Plant</label>
                </div>
            </div>
            <div className='market-place-month-filter mt-2 mb-2'>
                <h5>Product Usage</h5>
                <div>
                <input type='radio' name='months-filter' className='category-filter-head'/>
                <label className='category-filter-value'>less than 6 months</label>
                </div>
                <div>
                <input type='radio' name='months-filter' className='category-filter-head'/>
                <label className='category-filter-value'>within 15 months </label>
                </div>
                <div>
                <input type='radio' name='months-filter' className='category-filter-head'/>
                <label className='category-filter-value'>more than 2 years</label>
                </div>
            </div>
            </form>
            
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default MarketPlaceFilter