import React, { Fragment } from 'react'
import style from "./Cart.module.css"
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


const Cart = () => {
    return (
        <Fragment>
            <div className={style.mainCart}>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image13})` }}></div>
                    <div className={style.details}>
                        <h3>Product</h3>
                    
                        <div className={style.cartFooter}>

                            <div className={style.price}>
                                <span>
                                    <sub>EGP</sub>
                                    <p>500</p>
                                </span>
                                <span>
                                    <del>150</del>
                                    <p>30 % off</p>
                                </span>

                            </div>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={style.hr}></div>
                <div>
                    <div className={style.image}></div>
                    <div className={style.details}>
                        <h3>Product</h3>
                        <div className={style.cartFooter}>

                            <div className={style.price}>
                                <span>
                                    <sub>EGP</sub>
                                    <p>500</p>
                                </span>
                                <span>
                                    <del>150</del>
                                    <p>30 % off</p>
                                </span>

                            </div>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={style.hr}></div>
                <div>
                    <div className={style.image}></div>
                    <div className={style.details}>
                        <h3>Product</h3>
                        <div className={style.cartFooter}>

                            <div className={style.price}>
                                <span>
                                    <sub>EGP</sub>
                                    <p>500</p>
                                </span>
                                <span>
                                    <del>150</del>
                                    <p>30 % off</p>
                                </span>

                            </div>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={style.hr}></div>
                <div>
                    <div className={style.image}></div>
                    <div className={style.details}>
                        <h3>Product</h3>
                        <div className={style.cartFooter}>

                            <div className={style.price}>
                                <span>
                                    <sub>EGP</sub>
                                    <p>500</p>
                                </span>
                                <span>
                                    <del>150</del>
                                    <p>30 % off</p>
                                </span>

                            </div>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={style.hr}></div>
                <div>
                    <div className={style.image}></div>
                    <div className={style.details}>
                        <h3>Product</h3>
                        <div className={style.cartFooter}>

                            <div className={style.price}>
                                <span>
                                    <sub>EGP</sub>
                                    <p>500</p>
                                </span>
                                <span>
                                    <del>150</del>
                                    <p>30 % off</p>
                                </span>

                            </div>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={style.hr}></div>
            </div>
        </Fragment>
    )
}

export default Cart