import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
// import form from 'react-bootstrap/Form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Weather from './Weather'
import Movie from './Movie'

export class App extends React.Component {
  constructor (props){
    super(props);
    this.state={
      cityData: {},
      searchQ: '',
      showMap: false,
      errorMessage: false,
      weatherData: []  
    }
  }

  getData = async (event) =>{
    event.preventDefault();
    await this.setState({
      searchQ:event.target.city.value
    })
    console.log(this.state.searchQ);


    try{
      let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_lOCATION_KEY}&q=${this.state.searchQ}&format=json`;
      let resData = await axios.get(url);
      console.log(resData);
  
      this.setState({
        cityData: resData.data[0],
        showMap: true
  
      })
    }catch{
      this.setState({
        errorMessage:true
      })
  
    }
//hek bdk yes run ok lasho hay el wenha hadi la port 3005 m

 //http://localhost:3001/weather?cityName=Amman&lon=35.91&lat=31.95

    let weatherurl = `http://${process.env.REACT_APP_P0RT}/weather?cityName=${this.state.searchQ}`
    let weatherRequest = await axios.get(weatherurl,{headers: {"Access-Control-Allow-Origin": "http://localhost:3005"}})
    console.log(this.state.weatherRequest)
    this.setState({
      weatherData: weatherRequest.data
    })

    

    let urlMoive=`${process.env.REACT_APP_P0RT}/movies?cityName=${this.state.searchQ}`
debugger
    let accessMoive=await axios.get(urlMoive)
    
    await this.setState(
      {
      movieData:accessMoive.data
      // showmovie:true
    })
   
  }
 


  render() {
    return (
      <div>
        <form  onSubmit={this.getData} >
          <input type='text' placeholder='city name' name='city' />
          <Button variant="outline-success" type="submit">Explore cities </Button>{' '}
  
        </form>
        
         

           {
            this.state.weatherData.map((value,index) => {
              return (
                <Weather
                weatherResult={value} />
              )
            })
          }
          <>
           <p>{this.state.cityData.display_name}</p>
           <p>{this.state.cityData.lat}</p>
           <p>{this.state.cityData.lon}</p> 
        </>
        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_lOCATION_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        } 

        
        <Movie 
        result={this.state.movieData}
        
        />
        
        
      </div>

      
    )
  }
}

export default App


