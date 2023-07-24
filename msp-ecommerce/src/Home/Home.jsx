import React, { Fragment } from 'react'
import style from "./Home.module.css"
// import images
import image1 from "../images/gloves.jpg";
import image2 from "../images/camera.jpg";
import image3 from "../images/t-shirts.jpg";
import image4 from "../images/pants.jpg";
import image5 from "../images/dress.jpg";
import image6 from "../images/shoes.jpg";
import image7 from "../images/bag.jpg";
import image8 from "../images/hat.jpg";
import image9 from "../images/sunglasses.jpg";
import image10 from "../images/lamp.jpg";
import image11 from "../images/towel.jpg";
import image12 from "../images/chairs.jpg";
import image13 from "../images/cushion.jpg";
import image14 from "../images/coffeeCups.jpg";
import image15 from "../images/curtain.jpg";
import logo from "../images/MSPLogo.svg"
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Home = () => {
    return (
        <Fragment>
            <div className={style.mainHome}>
                <header>
                    <div className={logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <h1>MSP Ecommerce</h1>
                </header>
                <section>
                    <div className={style.productsHeader}>
                        <p>15</p>
                        <h1>Top Home Picks</h1>
                    </div>

                    <div>
                        <Products />
                    </div>
                </section>
                <section>
                    <div><Cart/></div>
                    <div className={style.cartFooter}>
                        <h1>Total Price:</h1>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>

                    </div>
                </section>
            </div>

        </Fragment>
    )
}

export default Home