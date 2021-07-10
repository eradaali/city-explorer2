


import React from 'react';
import axios from 'axios';
import CityCard from './components/CityCard';
import MapModal from './components/MapModal';
import WeatherCard from './components/WeathCard';
import MoviesCard from './components/MoviesCard';
import Header from './Header';
import Footer from './Footer';
import ErrorMessage from './components/ErrorMessage';
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInformation: {},
      cityName: '',
      WeatherInformation: [],
      showInformation: false,
      showMap: false,
      showWeather: false,
      showError: false,
      showMovies: false,
      MoviesInformation: [],
    }
  }
  // This Function used to take the value from the form and render the result
  exploreCity = async (e) => {
    e.preventDefault();
    await this.setState({
      cityName: e.target.city.value.toLowerCase()
    })
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cityName}&format=json`;
    let responseData = await axios.get(url);
    await this.setState({
      cityInformation: responseData.data[0],
      showInformation: true,
    })
    // This for weather && Movies 
    this.renderWeather();
    this.renderMovies();
  }
  //Getting Response Fron API
  renderWeather = async () => {
    const city = this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1);
    let weatherUrl = `https://city-explorer-backend-301d25.herokuapp.com/weatherinfo?cityName=${city}&format=json`;
    let weatherData = await axios.get(weatherUrl)
    await this.setState({
      WeatherInformation: weatherData.data,
      showWeather: true,
    })
  }
  // Getting Response Fron API
  renderMovies = async () => {
    const city = this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1);
    let moviesUrl = `https://city-explorer-backend-301d25.herokuapp.com/moviesinfo?cityName=${city}&format=json`;
    // let moviesUrl = ` http://localhost:3000/moviesinfo?cityName=${city}&format=json`
    let moviesData = await axios.get(moviesUrl)
    await this.setState({
      MoviesInformation: moviesData.data,
      showMovies: true,
    })
  }
  //  show the map modal
  showMapModal = async () => {
    await this.setState({
      showMap: true,
    })
  }
  handleClose = () => {
    this.setState({
      showMap: false,
    })
  }
  // Rendering part
  render() {
    return (
      <div className="main" >
        <div className="form">
        <Header/>
        <ErrorMessage/>
          <form onSubmit={this.exploreCity} >
            <input type="text" placeholder="Name of the city" name="city" />
            <button type="submit"> Explore </button>
          </form>
        </div>
        <CityCard cityInformation={this.state.cityInformation} showInformation={this.state.showInformation} showMapModal={this.showMapModal} />
        <WeatherCard WeatherInformation={this.state.WeatherInformation} showWeather={this.state.showWeather} cityInformation={this.state.cityInformation} renderWeather={this.renderWeather} />
        {this.state.MoviesInformation.map(movie => {
          return (
            <MoviesCard movie={movie} showMovies={true} />
          )})}
        <MapModal cityInformation={this.state.cityInformation} showMap={this.state.showMap} handleClose={this.handleClose} />
        <Footer/>
      </div>
    )
  }
}
export default App;