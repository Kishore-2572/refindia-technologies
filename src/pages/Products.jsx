import React from 'react';
import { useContext, useState, useReducer, useEffect } from 'react';
import { store } from '../store';
import { db } from '../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import LoadingSpinner from '../components/LoadingSpinner';
import Toaster from '../components/Toaster';
import '../css/products.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useSearchParams } from 'react-router-dom';

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
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState('');
  const [all, setAll] = useState(true);
  const [milk, setMilk] = useState(false);
  const [curd, setCurd] = useState(false);
  const [paneer, setPaneer] = useState(false);
  const [yogurt, setYogurt] = useState(false);
  const [status, setStatus] = useState(false);
  const [description, setDescription] = useState(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium suscipit delectus, nulla, sunt perspiciatis placeat error tempora quia impedit commodi quidem voluptate adipisci ipsa natus explicabo iusto nihil, neque culpa?'
  );

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
        setStatus(true);
        setFilter(filteredData);
        if (searchParams.get('category')) {
          handleFilter(searchParams.get('category'));
        }
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

  useEffect(() => {
    // filterapply()
    if (status === true) {
      if (all) {
        setFilter(products);
      } else {
        var pr = [];
        products.forEach((p) => {
          if (milk && p['product_category'] === 'milk') {
            pr.push(p);
          }
          if (curd && p['product_category'] === 'curd') {
            pr.push(p);
          }
          if (paneer && p['product_category'] === 'paneer') {
            pr.push(p);
          }
          if (yogurt && p['product_category'] === 'yogurt') {
            pr.push(p);
          }
        });
        setFilter(pr);
      }
    }
  }, [all, milk, curd, yogurt, paneer]);

  const handleFilter = (val) => {
    if (val === 'all') {
      if (all) return;
      else {
        setAll(true);
        setMilk(false);
        setCurd(false);
        setPaneer(false);
        setYogurt(false);
      }
    } else if (val === 'milk') {
      if (milk && !curd && !yogurt && !paneer) {
        setAll(true);
        setMilk(false);
      } else {
        setAll(false);
        setMilk(!milk);
      }
    } else if (val === 'paneer') {
      if (!milk && !curd && !yogurt && paneer) {
        setAll(true);
        setPaneer(false);
      } else {
        setAll(false);
        setPaneer(!paneer);
      }
    } else if (val === 'curd') {
      if (!milk && curd && !yogurt && !paneer) {
        setAll(true);
        setCurd(false);
      } else {
        setAll(false);
        setCurd(!curd);
      }
    } else if (val === 'yogurt') {
      if (!milk && !curd && yogurt && !paneer) {
        setAll(true);
        setYogurt(false);
      } else {
        setAll(false);
        setYogurt(!yogurt);
      }
    }
  };

  return (
    <div className="products">
      {' '}
      {loading ? (
        <div className="loading-spinner">
          <LoadingSpinner />
        </div>
      ) : (
        <div>
          <Navbar bg="light" expand="lg" className="products-filter">
            <Container>
              {/* onClick={()=>filterResult("milk")} */}
              <Button
                className={all ? 'clicked' : 'not_clicked'}
                onClick={() => handleFilter('all')}
              >
                All
              </Button>
              <Button
                className={milk ? 'clicked' : 'not_clicked'}
                onClick={() => handleFilter('milk')}
              >
                Milk Plant
              </Button>
              <Button
                className={curd ? 'clicked' : 'not_clicked'}
                onClick={() => handleFilter('curd')}
              >
                Curd Plant
              </Button>
              <Button
                className={paneer ? 'clicked' : 'not_clicked'}
                onClick={() => handleFilter('paneer')}
              >
                Paneer Plant
              </Button>
              <Button
                className={yogurt ? 'clicked' : 'not_clicked'}
                onClick={() => handleFilter('yogurt')}
              >
                Yogurt Plant
              </Button>
              <Form className="d-flex prod-search">
                <Form.Control
                  type="search"
                  placeholder="search by product name"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Form>
            </Container>
          </Navbar>
          <Container fluid className="mx-2">
            <Row className="mt-4 mx-2 products-items">
              {filter
                .filter((e) => {
                  return search.toLowerCase() === ''
                    ? e
                    : e['product_name'].toLowerCase().includes(search) ||
                        e['product_category'].toLowerCase().includes(search);
                })
                .map((e, idx) => {
                  return (
                    <Col key={idx} className="products-card">
                      <Card
                        className="products-card-inner"
                        style={{ width: '18rem', height: '27rem' }}
                      >
                        <Card.Img
                          variant="top"
                          src={e['product_img'][0]}
                          width="100%"
                          height="200px"
                        />
                        <Card.Body>
                          <Card.Title>{e['product_name']}</Card.Title>
                            <Card.Text>Plant : {e['product_category']}</Card.Text>
                          <Link
                            to={`/products/${e.id}`}
                            className="product-card-link"
                          >
                            <Button className="primary ">Show more</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Container>
        </div>
      )}{' '}
    </div>
  );
}

export default Products;
