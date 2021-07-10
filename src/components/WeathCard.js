import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
class WeatherCard extends React.Component {
    render() {
        return (
            <div className="cardcontainer">
            {this.props.showWeather &&
            <Card  >
            <Card.Body>
            <Card.Title>{this.props.cityInformation.display_name} Weather </Card.Title>
            {this.props.WeatherInformation.map(day =>
            <Card.Text>
            {day.date} {' : '} {day.description}
            </Card.Text>
            )}
            </Card.Body>
            </Card>
            }
            </div>
        )
    }
}
export default WeatherCard;