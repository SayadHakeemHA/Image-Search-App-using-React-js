import React from 'react'
import styles from './imgresults.module.css'

function Imgresults(props) {
    let {data} = props
  return (
    <div className={styles.main}>
        {
          data &&  data.map(ele=>(
                <img className={styles.image} key={ele?.id} src={ele?.urls?.small} alt="" />
            ))
        }
    </div>
  )
}

export default Imgresults