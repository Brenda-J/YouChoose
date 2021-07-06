import React from 'react';
import RestaurantContainer from './restaurants_container';


class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            activated: false
        }
        this.handleIndex = this.handleIndex.bind(this);
        this.handleRandom = this.handleRandom.bind(this);

        // this.setRating = this.setRating.bind(this);
    }

    componentDidMount() {
        // debugger
        let cuisine = this.props.cuisine
        let location = this.props.region
        let tag = this.props.tag
        this.props.fetchRestaurantsByCuisine({tag, cuisine, location});
    }

 

    componentDidUpdate() {
        console.log(this.props.cuisine)
    }

    handleIndex(index) {
        return e => {
            e.preventDefault();
            this.setState({ index })
        }
    }
    handleRandom(e){
        e.preventDefault();
        if(this.state.activated){
          // console.log(this.props.currentUser);
          this.setState({ index: Math.floor(Math.random() * Object.values(this.props.currentUser.favorites).length)})
        }else{
          
          this.setState({ index: Math.floor(Math.random() * Object.values(this.props.restaurants).length)})
        }
    }

    // setRating(rating) {
    //     { document.getElementsByClassName(`.stars-inner`).style.width = rating }
    // }


        // document.getElementsByClassName(`.stars-inner`).style.width = this.props.restaurant.rating

    handleFavorites(e){
        e.preventDefault()
        this.setState({
            activated: !this.state.activated,
            index: 0
        })
    };

    render(){
        if (this.props.restaurants && !this.state.activated) {
            return(
                <div className="restaurant-page">
                    <button className="favorites-button" onClick={e => this.handleFavorites(e)}>Favorites</button>
                <button className="favorites-button" onClick={this.handleRandom}>You Choose</button>
                    <ul className="restaurant-list">
                        {Object.values(this.props.restaurants).map((restaurant, index) => {
                            // return <RestaurantContainer restaurant={restaurant} />
                            return <li
                                className={this.state.index === index ? "active" : ""}
                                onClick={this.handleIndex(index)}
                                key={index}>
                                {restaurant.name}
                                <br />
                                <div className="star-ratings">
                                    <div className="star-ratings-css-product">
                                        <div className="star-ratings-css-product-top" style={{ width: `${parseFloat(restaurant.rating).toFixed(1) * 0.83}em` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                        <div className="star-ratings-css-product-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                    </div>
                                </div>
                                {restaurant.rating}
                            </li>
                        })}
                    </ul>
                    <div className="restaurant-show">
                        <RestaurantContainer restaurant={Object.values(this.props.restaurants)[this.state.index]}  />
                    </div>
                </div>
            )
        } 
        else if (this.state.activated) {
            return (
              <div className="restaurant-page">
                <button className="favorites-button" onClick={(e) => this.handleFavorites(e)}>
                  Restaurant List
                </button>

                <button className="favorites-button" onClick={this.handleRandom}>You Choose</button>
                <ul className="restaurant-list">
                  {Object.values(this.props.favoriteRestaurants).map(
                    (restaurant, index) => {
                      // return <RestaurantContainer restaurant={restaurant} />
                      return (
                        <li
                          className={this.state.index === index ? "active" : ""}
                          onClick={this.handleIndex(index)}
                          key={index}
                        >
                          {restaurant.name}
                        </li>
                      );
                    }
                  )}
                </ul>
                <div className="restaurant-show">
                  <RestaurantContainer
                    
                    restaurant={
                      Object.values(this.props.favoriteRestaurants)[
                        this.state.index
                      ]
                    }
                  />
                </div>
              </div>
            );
        }else{
            return(
            <div>
              nothing is here
            </div>
            )
        }
        
    }
}

export default RestaurantList;