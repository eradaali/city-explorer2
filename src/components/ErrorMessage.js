import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
class ErrorMessage extends React.Component {
    render() {
        return (
    <div className = "cardcontainer">
    {this.props.showError &&
    <Card  >
    <Card.Body>
    <Card.Title>Try again </Card.Title>
    </Card.Body>
    </Card>
    }
    </div>
        )
    }
}
export default ErrorMessage;