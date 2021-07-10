import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
export class ErrorMessage extends Component {
    render() {
        return (
            <div>
                {this.props.alert&& <Alert variant={'danger '}>
              {this.props.error}
  </Alert>}
            </div>
        )
    }
}
export default ErrorMessage