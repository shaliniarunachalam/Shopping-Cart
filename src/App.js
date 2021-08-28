import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"

import './App.css';
import ByPage from "./Components/ByPage";
import {Container,Row,Col} from "reactstrap"
import Cart from "./Components/Cart"

import {ToastContainer,toast} from "react-toastify"


function App() {

  const[cartItem,setCartItem]=useState([])
   
  const addInCart=item=>
  {
    const isAlreadyAdded=cartItem.findIndex(function(array)
    {
      return array.id===item.id
    })

    if(isAlreadyAdded!==-1)
    {
      toast("already added in cart",{
        type:"error"
      })
      return;
    }
    setCartItem([...cartItem,item]);
  }

  const buyNow = ()=>{
    setCartItem([])

    toast("Purchase Complete",{
type:"success"
    })
  }

  const removeItem =item=>{
    setCartItem(cartItem.filter(singleItem=>singleItem.id!==item.id))
  };

  return (
    <Container>
      <ToastContainer/>
      <Row>
        <Col md="8">
        <ByPage addInCart={addInCart}/>
        </Col>
        <Col md="4">
<Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
