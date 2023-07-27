import React, { Fragment } from 'react'
import style from "./Products.module.css"

const Products = ({ list, addCart }) => {
    return (
        <Fragment>
            <div className={style.products}>
                {
                    list.map(({image,name,oldPrice,offer},indx) => (
                        <div key={indx}>
                            <div className={style.image} style={{ backgroundImage: `url(${image})` }}></div>
                            <div className={style.productDetails}>
                                <h3>{name}</h3>
                                <span>
                                    <sub>EGP</sub>
                                    <p>{(oldPrice*(offer/100)).toFixed(2)}</p>
                                </span>
                                <span>
                                    <del>{oldPrice}</del>
                                    <p>{offer} % off</p>
                                </span>
                                <button onClick={(e) => addCart(e, indx)}>Add to Cart</button>
                            </div>
                         
                        </div>
                    ))}
            </div>

        </Fragment >
    );
};

export default Products;
