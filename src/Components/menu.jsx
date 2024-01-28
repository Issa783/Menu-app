import React from "react";
import style from "../style.module.css"
const Menu = (props) => {
    return (
        <article className={style.menuitem}>
            <img src={props.menuItem.image} className={style.photo} />
            <div className={style.iteminfo}>
                <header>
                    <h4>{props.menuItem.title}</h4>
                    <h4>{props.menuItem.price}</h4>
                </header>
                <p className={style.itemtext}>{props.menuItem.desc}</p>
            </div>
        </article>
    )
}
export default Menu