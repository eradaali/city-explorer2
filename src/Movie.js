import React from 'react'
class Movie extends React.Component {
constructor(props){
  super(props);
  this.hi=props;
  this.myRef=React.createRef();
}
  render() {
    console.log(this.hi);
    return (
      <>
        <div>Movies</div>
        {

          // this.props.result.map(val => {
          //   return (
          //     <>
          //       <img alt="" src={val.image_url} style={{ width: '15rem' }} />
          //       <p>{val.title}</p>
          //       <p>{val.overview}</p>
          //       <p>{val.total_votes}</p>
          //       <p>{val.popularity}</p>
          //       <p>{val.released_on}</p>

          //     </>

          //   )
          }


        {/* } */}
      </>
    )
  }
}
export default Movie;
