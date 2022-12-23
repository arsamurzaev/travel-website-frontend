import React from 'react';
import styles from './moreSchema.module.scss';

export default function index() {
  return (
    <>
        <div className={styles.more}>
            <div className={styles.text}>Подробнее</div>
            <div className={styles.schema}>
                <div>
                    <div></div>
                    <span>21</span>
                    <span>пн</span>
                </div>
                <div>
                    <div></div>
                    <span>22</span>
                    <span>вт</span>
                </div>
                <div>
                    <div></div>
                    <span>23</span>
                    <span>ср</span>
                </div>
                <div>
                    <div></div>
                    <span>24</span>
                    <span>чт</span>
                </div>
                <div>
                    <div></div>
                    <span>25</span>
                    <span>пт</span>
                </div>
                <div>
                    <div></div>
                    <span>26</span>
                    <span>сб</span>
                </div>
                <div>
                    <div></div>
                    <span>27</span>
                    <span>вс</span>
                </div>
            </div>
            <div className={styles.mount}>
                <div>Октябрь</div>
                <div>Ноябрь</div>
            </div>
        </div>
    </>
  )
}
