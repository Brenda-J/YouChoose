import React from 'react';

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      favoriteList: {},
      favorites: []
    }
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  addToFavorite(e) {
    e.preventDefault()
    let favorites = this.props.currentUser.favorites;
    if (!Object.keys(favorites).includes(this.props.restaurant.id)) {
      favorites[this.props.restaurant.id] = this.props.restaurant;
    } else {
      delete favorites[this.props.restaurant.id]
      // favorites[currentRestaurant.id] = null
      // this.props.helperFavorite()
    }
    this.setState({})
  }

  render() {
    if (this.props.restaurant) {
      return (
        <div className="restaurant-template">
          <a href={this.props.restaurant.url} target="_blank">Go to Yelp: {this.props.restaurant.name}</a>
          <p>Phone: {this.props.restaurant.phone}</p>
          <p>Address: {this.props.restaurant.location.display_address}</p>
          <p>Price: {this.props.restaurant.price}</p>
          <p>Rating: {this.props.restaurant.rating}</p>
          <img src={this.props.restaurant.image_url} />
          <button className={this.props.currentUser.favorites[this.props.restaurant.id] ? "fav-button-act" : "fav-but"} onClick={(e => this.addToFavorite(e))}></button>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      )
    }

  }
}
// tryna fix 
export default Restaurant;