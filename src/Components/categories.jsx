import React from "react";
import styles from "../styles.module.css";

const Category = ({categories,filteritems}) => {
    return (
        <div className={styles.btncontainer}>
            {categories.map((category)=>{
                return  <button type="button" className={styles.filterbtn} onClick={() => filteritems(category)}>
                {category}
            </button>
            })}
           
        </div>
    );
};

export default Category;
