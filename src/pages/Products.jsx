import React from 'react';
import { useContext, useState, useReducer, useEffect } from 'react';
import { store } from '../store';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import LoadingSpinner from '../components/LoadingSpinner';
import Toaster from '../components/Toaster';
import '../css/products.css'
import '../css/products_filter.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import '../css/products.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING_PRODUCTS':
      return { ...state, loading: true };
    case 'FETCHING_COMPLETED':
      return { ...state, loading: false };
  }
};

function Products() {
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,

  });
  const { state, dispatch: ctxDispatch } = useContext(store);
  const [products, setProducts] = useState([]);
  const [filter,setFilter] = useState([]);
  const [search,setSearch] = useState('');
//modified start
  const [status,setStatus] = useState(false)
//modified end
  useEffect(() => {
    // Fetching products from firebase collection
    const fetchProducts = async () => {
      dispatch({ type: 'FETCHING_PRODUCTS' });
      const productsCollectionref = collection(db, 'products');
      try {
        const data = await getDocs(productsCollectionref);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(filteredData);
        //aaa 
        setStatus(true)
        setFilter(filteredData)
        ctxDispatch({ type: 'SAVE_PRODUCTS', payload: filteredData });
      } catch (err) {
        // *****************************  Error should be shown in Toast **********************************
        console.log(err);
        <Toaster />; //but need to check that component.
      }
      dispatch({ type: 'FETCHING_COMPLETED' });
    };
    fetchProducts();
  }, []);
  // console.log(products)
  const[prod,setProd]=useState([])
    const filterapply = ()=>{
    if(status===true){
    var pr = []
    console.log("inside in working")
    console.log(products)
    products.map((p) => {
      if(p.category==="milk" && milk===true){
        pr.push(p)
      }
      if(p.category==="curd" && curd===true){
        pr.push(p)
      }
      if(p.category==="paneer" && paneer===true){
        pr.push(p)
      }
      if(p.category==="yogurt" && yogurt===true){
        pr.push(p)
      }
    })
    setProd(pr)
    if(!milk && !curd && !paneer && !yogurt){
      setFilter(products)
    } 
    else{
      setFilter(prod)
    }
  }
}
useEffect(()=>{
  //console.log(prod)
  filterapply()
  //console.log(prod)
})
  console.log(status);
  console.log(products);
  //time of loading is too short.
  const[milk,setMilk]=useState(false)
  const[curd,setCurd]=useState(false)
  const[paneer,setpaneer]=useState(false)
  const[yogurt,setYogurt]=useState(false)
  const handleClick=((check)=>{
    if(check==="milk"){
      setMilk(!milk);
    }
    else if(check==="curd"){
      setCurd(!curd);
    }
    else if(check==="paneer"){
      setpaneer(!paneer);
    }
    else if(check==="yogurt"){
      setYogurt(!yogurt);
    }
  })
  // console.log(clicked)
  return <div className='products' > {loading ? <div className='loading-spinner'><LoadingSpinner/></div> : 
  <div>
       <Navbar bg="light" expand="lg" className='products-filter'>
      <Container>
      {/* onClick={()=>filterResult("milk")} */}
        <Button className={milk?"clicked":"not_clicked"} onClick={()=>handleClick("milk")} >Milk Plant</Button>
        <Button className={curd?"clicked":"not_clicked"} onClick={()=>handleClick("curd")}>Curd Plant</Button>
        <Button className={paneer?"clicked":"not_clicked"} onClick={()=>handleClick("paneer")}>paneer Plant</Button>
        <Button className={yogurt?"clicked":"not_clicked"} onClick={()=>handleClick("yogurt")}>Yogurt Plant</Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search by product name"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
          </Form>
      </Container>
    </Navbar>
      <Container fluid className='mx-2'>
        <Row className='mt-4 mx-2'>
            {filter.filter((e)=>{
              return search.toLowerCase()===''? e : e.category.toLowerCase().includes(search)||e.name.toLowerCase().includes(search);
            }).map((e,idx) =>{
                return  <Col md={3} xs={12}>
                <Card className='team-member-card mb-2' style={{ width: '18rem',height:'27rem' }} >
                    <Card.Img variant="top" src={e.image} width="100%" height="200px"/>
                    <Card.Body>
                    <Card.Title><h5>{e.name}</h5></Card.Title>
                    <Card.Title>{e.category}</Card.Title>
                    <Card.Title>{e.material}</Card.Title>
                    <Card.Title>{e['automatic grade']}</Card.Title>
                    <Button className='primary'>look</Button>
                    </Card.Body>
                </Card>
            </Col>
                  } 
              )} 
  
         </Row>
  </Container>
  </div>
   } </div>;
}

export default Products;
