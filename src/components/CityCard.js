import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
class CityCard extends React.Component {
render() {
return (
    <div className = "cardcontainer">
        {this.props.showInformation &&
            <Card  >
                <Card.Body>
                    <Card.Title>City Name: {this.props.cityInformation.display_name}</Card.Title>
                    <Card.Text>
                        Latitude :  {this.props.cityInformation.lat}
                    </Card.Text>
                    <Card.Text>
                        longitude :  {this.props.cityInformation.lon}
                    </Card.Text>
                    <Button variant="primary" onClick={this.props.showMapModal}>Map</Button>
                </Card.Body>
            </Card>
        }
    </div>
)
}
}
export default CityCard;