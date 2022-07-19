import React from 'react'
import { data } from '../../store/data'
import css from './OrderBasket.module.css'

export const OrderBasket = () => {
    return (
        <>
            <div className={css.orderContainer}>

                <div className={css.menuContainer}>
                    <h1>Menu</h1>
                    <ul>
                        {
                            data.map((el, id) => {
                                return (
                                    <li className={css.li_V1} key={id}>
                                        {el.title} <b>{el.price}</b>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className={css.basketContainer}>
                    <h1>Orders</h1>
                </div>
            </div>
        </>
    )
}