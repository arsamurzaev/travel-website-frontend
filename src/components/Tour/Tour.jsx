import React from "react";
import styles from "./tour.module.scss";
import CartTour from "./CartTour";
import CallTour from "./CallTour";
import { useState } from "react";
const Tour = () => {
  const [sort, setSort] = useState({
    name: "Популярности",
    sort: "raiting",
  });
  // const [sorted, setSorted] = useState({sorted:"id", reversed: false})
  // const sortById = () =>{
  //   setSorted({sorted:"id", reversed: !sorted.reversed})
  //   usersCopy = [...sort]
  //   usersCopy.sort((userA, userB)=>{
  //     if (sorted.reversed){
  //       return userA.id - userB.id
  //     }
  //     return userB.id - userA.id
  //   })
  //   setSort(usersCopy)
  // }
  const listSort = [
    { name: "Популярности", sort: "raiting" },
    { name: "Ценe", sort: "price" },
    { name: "Алфавит", sort: "title" },
  ];
  console.log(sort);
  // &sortBy=${sort.sort}&order=des

  return (
    <>
      <div className={styles.tour_container}>
          <div className={styles.sort}>
            <h4>Сортировка по:</h4>
            {listSort.map((item, i) => (
              <ul className={styles.ul}>
                <li key={i} onClick={() => setSort(item)}>
                  {item.name}
                </li>
              </ul>
            ))}
          </div>
        <div className={styles.content}>
          <CartTour />
     
          <div className={styles.call_tour}>
            <CallTour />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
