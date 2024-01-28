import React, { useState } from "react"
import items from "./data"
import style from "./style.module.css"
import Menu  from "./Components/menu"
import Category from "./Components/categories"
const allCategories =["All",...new Set(items.map((item) => {
  return item.category;
}))]
function App() {
  const[menuItems,setMenuItems] = useState(items)
  const[categories,setCategories] = useState(allCategories)
  const filteritems = (category) => {
    if(category === "All"){
      setMenuItems(items)
      return;
    }
      const newItem = items.filter((item) => item.category === category)
      setMenuItems(newItem)
  }
 
  const menuitem =   menuItems.map((menuItem) => {
    return <Menu key={menuItem.id} menuItem = {menuItem} />
  })
  const categoryItem = categories.map((category,index) => {
    return <Category key={index} category= {category} filteritems={filteritems}/>
  })
  return (
    <main>
      <section className={style.menusection}>
        <div className={style.title}>
        <h2>Our Menu</h2>
        <div className={style.underline}></div>
        </div>
        {categoryItem}
        {menuitem}
      </section>
    </main>
  );
}

export default App;
