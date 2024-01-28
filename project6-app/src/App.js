import React, { useEffect, useState } from "react";
import Data from "./data"
import { FaAngleLeft } from "react-icons/fa"; 
import { FaAngleRight } from "react-icons/fa6";
import styles from "./style.module.css"
import { FaQuoteRight } from "react-icons/fa6";

function App() {
  const[reviews,setReviews] = useState(Data)
  const[index,setIndex] = useState(0)
  useEffect(()=>{
    const lastIndex = reviews.length - 1
    if (index < 0){
      setIndex(lastIndex);
    }
    if(index > reviews.length - 1){
      setIndex(0)
    }
  },[index,reviews])
  useEffect(() => {
    let slider = setInterval(()=>{
       setIndex(index + 1)
      },3000)
      return () => {clearInterval(slider)}
    },[index])

  return (
      
      <section className={styles.section}>
        <div className={styles.title}>
          <h2><span>/</span> Reviews</h2>
        </div>
        <div className={styles.sectioncenter}>
            {reviews.map((people,personIndex) => {
              const{id,image,name,title,quote} = people
              let position = styles.nextSlide

              if (personIndex === index){
                position = styles.activeSlide;
               }
              if(personIndex === index - 1 || (index === 0 && personIndex === reviews.length - 1)){
                position = styles.lastSlide
               }
              return (
                <article className={` ${position}`} key={id}>

                  <img src={image} alt={name} className={styles.personimg}/>
                  <h4>{name}</h4>
                  <p className={styles.title}>{title}</p>
                  <p className={styles.text}>{quote}</p>
                  <FaQuoteRight className={styles.icon} />
                </article>
              )
            })}
           
      <button className={styles.prev}>
      <FaAngleLeft onClick={()=>setIndex(index - 1)} /></button>
     <button className={styles.next}>
      <FaAngleRight onClick={()=>setIndex(index  + 1)} /></button> 
        </div>
     </section>
      
  );
}

export default App;
