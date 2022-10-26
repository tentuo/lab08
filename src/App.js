import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import DishDetail from './components/DishdetailComponent';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  
  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
         <Main />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;




