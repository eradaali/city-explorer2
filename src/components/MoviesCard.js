import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
class MoviesCard extends React.Component {
render() {
return (
    <div className="movie">
        {this.props.showMovies &&
            <Card  style={{ width: '28rem', textAlign:'center', marginLeft:450 }} >
                <Card.Body>
                    <Card.Title >Title : {this.props.movie.title}</Card.Title>
                    <Card.Text>
                        Language :  {this.props.movie.original_language} 
                    </Card.Text>
                    <Card.Text>
                        Avg. Vote :  {this.props.movie.vote_average}
                    </Card.Text>
                    <Card.Text>
                         Overview :  {this.props.movie.overview}
                    </Card.Text>
                    <Card.Text>
                         Total Vote : {this.props.movie.vote_count}
                    </Card.Text>
                    <Card.Text>
                         Popularity :  {this.props.movie.popularity}
                    </Card.Text>
                    <Card.Text>
                         Release_date :  {this.props.movie.release_date}
                    </Card.Text>
                    <Card.Img  variant="top" src={this.props.movie.poster_path}
                        alt={this.props.movie.title} />
                </Card.Body>
            </Card>
        }
    </div>
)
}
}
export default MoviesCard;