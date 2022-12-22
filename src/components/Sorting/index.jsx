import React from 'react';
import styles from './Sorting.module.scss';
import svg from '../../Images/Vector.svg'
export default function index() {
  return (
    <>
        <div className={styles.sort}>
            <button>по цене<img src={svg} alt="none" /></button>
            <button>по дате<img src={svg} alt="none" /></button>
        </div> 
    </>
  )
}
