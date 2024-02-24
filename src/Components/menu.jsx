import React from "react";
import styles from "../styles.module.css"
const Menu = ({menuItems}) => {
    return (
        <div className={styles.sectioncenter}>
            {menuItems.map((menu)=>{
                const {id, title, desc, price,image} = menu;
                return <article key={id}  className={styles.menuitem}>
                        <img src={image} className={styles.photo} />
            <div className={styles.iteminfo}>
                <header>
                    <h4>{title}</h4>
                    <h4 className={styles.price}>{price}</h4>
                </header>
                <p className={styles.itemtext}>{desc}</p>
            </div>
            </article>
            })}
            </div>
        
       
    )
}
export default Menu