import React, { Fragment } from 'react'
import { Cart3 } from 'react-bootstrap-icons';
import style from "./Cart.module.css"
const Cart = ({ list, RemoveFromCart }) => {
    return (
        <Fragment>
            <div className={style.cartIconContiner}>
                <div className={style.continer}>
                    <Cart3 className={style.cartIcon} />
                    <p>{list.length}</p>
                </div>
                <main>
                    <div className={style.mainCart}>
                        {
                            list.map(({ image, name, oldPrice, offer},ind) => (
                                <Fragment key={ind}>
                                    <div>
                                        <div className={style.image} style={{ backgroundImage: `url(${image})` }}></div>
                                        <div className={style.details}>
                                            <h3>{name}</h3>
                                            <div className={style.cartFooter}>
                                                <div className={style.price}>
                                                    <span>
                                                        <sub>EGP</sub>
                                                        <p>{(oldPrice * (offer / 100)).toFixed(2)}</p>
                                                    </span>
                                                    <span>
                                                        <del>{oldPrice}</del>
                                                        <p>{offer} % off</p>
                                                    </span>
                                                </div>
                                                <button onClick={(e)=>RemoveFromCart(e,ind)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.hr}></div>
                                </Fragment>
                            ))
                        }
                    </div>
                </main>
            </div>
        </Fragment>
    );
};

export default Cart;
