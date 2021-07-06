import React from "react";
import SplashCenter from "./splash_center";
import FoodGallery from "./food_gallery"
import SplashBottom from "./splash_bottom";
import SlideShow from "./slideshow"
import image1 from "./images/image1.jpg"
// import image2 from "./images/image2.jpg"
// import image3 from "./images/image3.jpg"
import breakfast from "./images/breakfast.jpg"
import lunch2 from "./images/lunch2.jpg"
import breakfast1 from "./images/breakfast1.png"
import food1 from "./foods/food1.jpg"
import food2 from "./foods/food2.jpg"
import food3 from "./foods/food3.jpg"
import food4 from "./foods/food4.jpg"
import food5 from "./foods/food5.jpg"
import food6 from "./foods/food6.jpg"
import food7 from "./foods/food7.jpg"
import food8 from "./foods/food8.jpg"
import food9 from "./foods/food9.jpg"
import food10 from "./foods/food10.jpg"
import food11 from "./foods/food11.jpg"
import food12 from "./foods/food12.jpg"
import pic1 from "./images/Everything-Hurts-And-Im-Hungry-Graphics-4570931-1.jpg"
import pic2 from "./images/Hello-Im-hungry-svg-for-cricut-Graphics-4450005-1.png"

class SplashPage extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="splash" >
                <SlideShow interval={4000}
                    images={[
                        image1,
                        breakfast,
                        lunch2,
                        breakfast1,
                    ]} />
                {/* <div className="splash-main">
                    <div className="splash-text">
                        SPLASH PAGE
                    </div>
                </div> */}
                <div className="splash-middle">
                    <SplashCenter props={this.props} />
                    <div className="splash-pics">
                        <img className="pic1" src={`${pic1}`} alt="pic1"></img>
                        <img className="pic2" src={`${pic2}`} alt="pic2"></img>
                    </div>
                </div>
                <br />
                <FoodGallery interval={2500} images={[
                    food1,
                    food2,
                    food3,
                    food4,
                    food5, 
                    food6, 
                    food7, 
                    food8, 
                    food9, 
                    food10, 
                    food11, 
                    food12,
                ]} />
                <br />
                <SplashBottom props={this.props} />
                <br />
                <hr />
            </div>
        )
    }
}

export default SplashPage;