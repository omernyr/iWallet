import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Spendinglist({ spendlist }) {

    const ToggleButtonOnOff = () => {
        const [isOff, setIsOff] = useState(true);
        return (
            <button className={styles.toggle_button} onClick={() => setIsOff(!isOff)}>
                {isOff ? '⬇' : '⬆'}
                </button>
        );
    }


    return (
        <div className={styles.container}>
            <div className={styles.expend}>
                <span>
                    Expend List ({spendlist.length})
                </span>
                <ToggleButtonOnOff />
            </div>
            <ul id="list" className={styles.list}>
                {spendlist.map((spend) => <li key={spend.name}>
                    <div className={styles.name_and_price}>
                        <span>
                             {spend.name}
                        </span>
                        <span className={styles.price}>
                            -{spend.price}
                        </span>
                    </div>
                    <div className={styles.descr}>
                        <span>
                            {spend.description}
                        </span>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}