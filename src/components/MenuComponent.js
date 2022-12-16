import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from "../shared/baseUrl";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        }
    }
    
    componentDidMount(){

    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }
    
    render() {
        const menu = DISHES.map(dish => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <div key={dish.id}  onClick={() => this.onDishSelect(dish)}>
                        <Link to={`/menu/${dish.id}`}>
                            <CardImg src={baseUrl + dish.image} />
                            <CardTitle>{dish.name}</CardTitle>
                        </Link>
                    </div>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    
                  </div>
                </div>
            </div>
        );
    }

}
export default Menu;