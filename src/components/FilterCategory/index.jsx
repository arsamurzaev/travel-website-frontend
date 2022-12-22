import React from "react";
import styles from "./FilterCategory.module.scss";

const FilterCategory = () => {
  const [active, setActive] = React.useState(false);

  const checkboxFilter = [
    { name: "Всё включено"},
    { name: "Завтрак" },
    { name: "Без питания" },
    { name: "Ультра, всё включено" },
    { name: "Полупансион" },
    { name: "Полный пансион" },
  ];

  return (
    <div className={styles.filter}>
      <div className={styles.name} onClick={() => setActive(!active)}>
        <p>Питание</p>
       
          {active ? (
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#2C2D2E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7L7 1L13 7"
                stroke="#2C2D2E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          )}
       
      </div>
      {active && checkboxFilter.map((item) => {
        return (
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <p>{item.name}</p>
          </div>
        );
      })}
     
    </div>
  );
};

export default FilterCategory;
