import React from "react";
import steven from "./images/steven.jpg"
import juan from "./images/juan.jpg"
import mason from "./images/mason.jpg"
import brenda from "./images/brenda.jpg"

class SplashBottom extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="splash-bottom">
                <div className="splash-bottom-text">
                    <h1 id="splash-bottom">Meet Our Developers</h1>
                    <div className="developers">
                        <div className="steven">
                            <img className="our-pics" src={steven} />
                            Steven Tran
                            <br />
                            <a href="https://github.com/steventran91"><i class="fa">&#xf09b;</i></a>
                        </div>
                        <br />
                        <div className="juan">
                        <img className="our-pics" src={juan} />
                            Juan Barba
                            <br />
                            <a href="https://github.com/JuanMBarba"><i class="fa">&#xf09b;</i></a>
                        </div>
                        <div className="mason">
                        <img className="our-pics" src={mason} />
                            Mason Saia
                            <br />
                            <a href="https://github.com/msaia97"><i class="fa">&#xf09b;</i></a>
                        </div>
                        <div className="brenda">
                        <img className="our-pics" src={brenda} />
                        {/* <div className="brenda-1"> */}
                            {/* <span className="brenda-main">Brenda Jiang
                                <span className="brenda-hover">
                                    Is there any text here?
                            </span>
                            </span> */}
                            Brenda Jiang
                            {/* </div> */}
                            <br />
                            <a href="https://github.com/Brenda-J"><i class="fa">&#xf09b;</i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashBottom;