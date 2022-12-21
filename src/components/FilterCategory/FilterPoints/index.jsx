import React from 'react';
import styles from './FilterPoints.module.scss';


export default function index() {
  return (
    <>
        <div className={styles.filter}>
            <div>
                <span>Тип номера</span>
                <select name="">
                    <option value="">Все</option>
                </select>
            </div>
            <div>
                <span>Тип питания</span>
                <select name="">
                    <option value="">Все</option>
                </select>
            </div>
            <div>
                <span>Вид рейса</span>
                <select name="">
                    <option value="">Все</option>
                </select>
            </div>
        </div>
    </>
  )
}
