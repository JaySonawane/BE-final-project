import Navbar from "./Navbar";
import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import useSWR from 'swr';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';


const fetcherproducts = (url) => fetch(url,
    {
      headers:
      {
          Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => res.json())
  
    const addtocart = (ProdID) => fetch('http://localhost:8001/user/addproduct/'+ProdID,
      {
        headers:
        {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(res => res.json())
  
  function Buy() {
  
    const navigate = useNavigate();
  
    const handleDetailsClick = (Id) => {

      console.log(Id);

      navigate('/product/'+ Id);
    };
  
    const handleAddClick =async (ProdID) => {

      console.log(ProdID);
          try {
            const response = await axios.get('http://localhost:8001/user/addproduct/'+ProdID, {     headers:
            {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            } });
  
          } catch (error) {
            console.error('Error:', error);
          }
  
    }
  
    const { data, error, isLoading } = useSWR('http://localhost:8001/user/products_display',fetcherproducts);
  
  
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
  
    const products= data.products;
    console.log(products);
  
    
  
  
    return (
    <div>
      <Navbar />
      <MDBContainer fluid>
        {products.map((product, index) => (
        <MDBRow className="justify-content-center mb-0">
          <MDBCol md="12" xl="10">
            <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                    <MDBRipple
                      rippleColor="light"
                      rippleTag="div"
                      className="bg-image rounded hover-zoom hover-overlay"
                    >
                      <MDBCardImage
                        src={`http://localhost:8001/${product.ImageURL}`}
                        fluid
                        className="w-100"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                      </a>
                    </MDBRipple>
                  </MDBCol>
                  <MDBCol md="6" style={{ fontSize: '1.2rem' }}>
                    <h5 style={{ fontSize: '1.5rem' }}>{product.Crop_Name}</h5>
                    <div className="d-flex flex-row">
                      <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                      </div>
                      <span>310</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                      <strong>Location:</strong> {product.Location}<br /><br />
                      <strong>Contact:</strong> {product.Contact}<br /><br />
                    </div>
                  </MDBCol>
                  <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                  >
                    <h4 className="text-success">Price</h4>
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">Rs {product.Price_per_unit} per {product.Unit}</h4>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <MDBBtn color="primary" size="sm" onClick={() => handleDetailsClick(product._id)}>Details</MDBBtn>
                      <MDBBtn outline color="primary" size="sm" className="mt-2" onClick={() => handleAddClick(product._id)}>Add</MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        ))}
      </MDBContainer>
    </div>  
    );
  }
  
  export default Buy;
