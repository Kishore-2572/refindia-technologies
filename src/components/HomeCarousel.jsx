import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function HomeCarousel() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://fujifilm-x.com/products-cameras-static/gfx100s/assets/images/top/wapk_resolution_image_01.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJyJhQdcpX_pV3F9JHfSsKPTR4lr4Oj1SL_mxn2hHHL3sZsp4aUXzxhqMhAL6dgkbZ0Dc&usqp=CAU'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiy_D0NKWTxjPsNJJnMP0sfXcRP6rCPpsSp6gZqsko-aorFq8_xbdm-9bL8_TQ6gVwpA&usqp=CAU'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
