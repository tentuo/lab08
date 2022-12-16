import React, { Component } from 'react';
import { Link, Switch, Route, Redirect, useParams } from 'react-router-dom';
import { DISHES } from "../shared/dishes"
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import ReactDOM from 'react-dom/client';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { postComment, addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

class Btsubmitcomment extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isModalOpen: false,
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }
    
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
  
    handleLogin(values,event) {
      this.toggleModal();
      //this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
      alert(" rating " + this.rating.value + " Username " + this.name.value + " comment " + this.comment.value);
      event.preventDefault();
    }

    render() {
        const img1 = require("../shared/butchi.png");
        return(
            <div>
                <Button outline onClick={this.toggleModal} className="lop3" ><img src={img1}/> Submit Comment</Button>
                        <Modal isOpen={this.state.isModalOpen} >
                            <ModalHeader >Submit Comment <Button onClick={this.toggleModal} className="lopcss12" style={{background: "white",color:"black",}}> x </Button></ModalHeader>
                            <ModalBody>
                                <Form onSubmit={(values) => this.handleLogin(values)}>
                                    <FormGroup>
                                        <Label > Rating </Label><br/>
                                        <Input type="select" style={{width:"440px", height:"40px"}} innerRef={(input) => this.rating = input}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label >Your name</Label>
                                        <Input type="text" innerRef={(input) => this.name = input} style={{width:"440px",}}/>
                                        <p style={{color: "red"}}>'Must be greater than 2 characters, Must be 15 characters or less'</p>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label> Comment <br/>
                                            <Input type="textarea" model=".message" style={{width:"440px", height:"100px",}}
                                            className="form-control" innerRef={(input) => this.comment = input}/>
                                        </Label>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </Form>
                                </ModalBody>
                        </Modal>
            </div>
        );
    }
}
export default Btsubmitcomment;