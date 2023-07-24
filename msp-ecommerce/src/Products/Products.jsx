import React, { Fragment } from 'react'
import style from "./Products.module.css"
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

const Products = () => {
    return (
        <Fragment>
            <div className={style.products}>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image13})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Cushion</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image12})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Chairs</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image9})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Sunglasses</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image8})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Hat</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image7})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Bag</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image6})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Shoes</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image1})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Gloves</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image2})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Camera</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image3})` }}></div>
                    <div className={style.productDetails}>
                        <h3>T-shirts</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image4})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Pants</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image5})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Dress</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image10})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Lamp</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image11})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Towel</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>



                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image14})` }}></div>
                    <div className={style.productDetails}>
                        <h3>CoffeeCups</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
                <div>
                    <div className={style.image} style={{ backgroundImage: `url(${image15})` }}></div>
                    <div className={style.productDetails}>
                        <h3>Curtain</h3>
                        <span>
                            <sub>EGP</sub>
                            <p>500</p>
                        </span>
                        <span>
                            <del>150</del>
                            <p>30 % off</p>
                        </span>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>

        </Fragment >
    )
}

export default Products