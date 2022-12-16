import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardImgOverlay} from 'reactstrap';
import React, { Component } from "react";

    
class Home extends Component {
        constructor(props) {
            super(props);
            this.state = {
                selectedDish: null
            }
        }
    
        onDishSelect(dish) {
            this.setState({ selectedDish: dish});
        }

    render() {
        const menu1 = this.props.dish.map((dish) => {
            return (
                <Card>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                {dish.designation ? <CardSubtitle>{dish.designation}</CardSubtitle> : null }
                <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
            );
        });

        const menu2 = this.props.promotion.map((promotion) => {
            return (
                <Card>
                <CardImg src={promotion.image} alt={promotion.name} />
                <CardBody>
                <CardTitle>{promotion.name}</CardTitle>
                {promotion.designation ? <CardSubtitle>{promotion.designation}</CardSubtitle> : null }
                <CardText>{promotion.description}</CardText>
                </CardBody>
                </Card>
            );
        });

        const menu3 = this.props.leader.map((leader) => {
            return (
                <Card>
                <CardImg src={leader.image} alt={leader.name} />
                <CardBody>
                <CardTitle>{leader.name}</CardTitle>
                {leader.designation ? <CardSubtitle>{leader.designation}</CardSubtitle> : null }
                <CardText>{leader.description}</CardText>
                </CardBody>
                </Card>
            );
        });

        return (
            <div className='row' >
                <div className="col-md-3 m-1" >
                    {menu1}
                </div>
                
                <div className="col-md-3 m-1" >
                    {menu2}
                </div>
                
                
                <div className="col-md-3 m-1" >
                    {menu3}
                </div>
                
            </div>
        );
    }
}

export default Home;