import React from "react";

class SplashCenter extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="splash-center">
                <div className="text-background">
                    <div className="splash-text">
                        <h1 className="about-me">About YouChoose</h1>
                        <br />
                        <h2 className="about-me-question">Have you ever wondered about what you should eat that day?</h2>
                        <p className="p1">Of course you have!</p>
                        <br />
                        <p className="p2">Well, wait no longer, YouChoose will help
                            <b> YOU</b> by choosing what to eat whether it be breakfast, lunch,
                            or dinner. Create an account or login to spin our wheel of cuisine
                            which will retrieve a restaurant for you to try from!</p>
                        <br />
                        <br />
                        <p className="food-gallery">Want to get hungry? Checkout our food gallery below!</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashCenter;