import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from "../shared/dishes";
import Menu from "./MenuComponent";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {COMMENTS} from '../shared/comments';
import Footer from "./FooterComponent";
import Header from './HeaderComponent';
import { baseUrl } from '../shared/baseUrl';
import Btsubmitcomment from './Btsubmitcomment';
import { postComment, addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';


class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            dish: DISHES,
            comment: COMMENTS,
        }
    }
    
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {

        return(
            <Card>
                <CardImg top src={baseUrl + dish.image} />
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </Card>
        );

    }

    renderComments({dish, comments, postComment, dishId}) {
        if (dish != null) {
            const anh = dish.comments;
            const mdah = anh.map((anh) => {
                return (
                        <Card key={anh.id}>
                            <CardTitle>{anh.comment}</CardTitle>
                            <CardTitle>--{anh.author}, {anh.date}</CardTitle>
                        </Card>
                );
            });
        
            return(
                <Card>
                    <h4>comments</h4>
                    <ul className="container">
                        {mdah}
                    </ul>
                    <Btsubmitcomment dishId={dishId} postComment={postComment} />
                </Card>
            );
        }
        else
            return(
                <div></div>
            );
    }


    render() {
        const menu = DISHES.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                        onClick={() => this.onDishSelect(dish)}>
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg src={baseUrl + dish.image} />
                        <CardTitle>{dish.name}</CardTitle>
                    </Link>
                    </Card>
                    
                </div>
            );
        });

        return (
            <div className="container">
                    <div className="container">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>cac mon an</h3>
                                <hr />
                            </div>
                    </div>
                    <div className="row">
                        
                    </div>

                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                    {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;