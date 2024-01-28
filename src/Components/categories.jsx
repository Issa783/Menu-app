import React from "react";
import styles from "../style.module.css";

const Category = (props) => {
    return (
        <div className={styles.btncontainer}>
            <button type="button" className={styles.filterbtn} onClick={() => props.filteritems(props.category)}>
                {props.category}
            </button>
        </div>
    );
};

export default Category;
