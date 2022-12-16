import React, { Component } from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import { DISHES } from "../shared/dishes"
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import ReactDOM from 'react-dom/client';
import { baseUrl } from '../shared/baseUrl';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Btsubmitcomment from './Btsubmitcomment';
import { postComment, addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

function Dishchitiet() {
    const {dishId} = useParams();
    const thisdish = DISHES.find(dih => dih.id == dishId);
    const img1 = require(`../${thisdish.image}`);
    const img2 = require("../shared/butchi.png");

    const anh = thisdish.comments;
    const mdah = anh.map((an) => {
        return (
            <div key={an.id}>
                <div className='lop2'> {an.comment} </div>
                <div className='lop2'>-- {an.author}, {an.date} </div>
            </div>
            );
        });

    return(
        <div>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{thisdish.name}</BreadcrumbItem>
                    </Breadcrumb>
            <div className='row'>         
                <div className='container1'>
                    <img  src={baseUrl + thisdish.image} height="300px" width="400px"/>
                    <div>{thisdish.name}</div>
                    <div>{thisdish.description}</div>
                </div>
                <div className='container2'>
                            <h4 className='lop2'>Comments</h4>
                            {mdah}
                            <br/>
                            <Btsubmitcomment dishId={dishId} postComment={postComment} />
                </div>
            </div>
        </div>
    );
}

export default Dishchitiet;

