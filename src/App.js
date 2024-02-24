import React, { useState } from "react"
import styles from "./styles.module.css"
import Menu  from "./Components/menu"
import Category from "./Components/categories"
import Data from "./data"
const allCategories =["All",...new Set(Data.map((item) => item.category))]
function App() {
  const[menuItems,setMenuItems] = useState(Data)
  const[categories,setCategories] = useState(allCategories)
  const filteritems = (category) => {
    if(category === "All"){
      setMenuItems(Data)
      return;
    }
      const newItem = Data.filter((item) => item.category === category)
      setMenuItems(newItem)
  }
 

  return (
    <main>
      <section className={styles.menusection}>
        <div className={styles.title}>
        <h2>Our Menu</h2>
        <div className={styles.underline}></div>
        </div>
       <Category categories={categories} filteritems = {filteritems} />
       <Menu menuItems = {menuItems} />
      </section>
    </main>
  );
}

export default App;
