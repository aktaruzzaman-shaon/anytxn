import React from 'react'
import styles from "./reachOutPortion.module.css"

const ReachOutPortion = () => {
    return (
        <div className={`${styles.headerPart} w-screen `}>
            <div>
                <h1 className='underline'>Embrace the future of finance</h1>
                <p>Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</p>
                <button type="button">Reach out to us</button>
            </div>
            <div></div>
        </div>
    )
}

export default ReachOutPortion