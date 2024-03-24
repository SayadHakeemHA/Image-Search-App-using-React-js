import React from 'react'
import styles from './search.module.css'
function Search(props) {
    // console.log(props);
    
    let {txt,setTxt} = props

  return (
    <div>
        <form >
            <input className={styles.inp}
            type="text" 
            name="" 
            id="" 
            placeholder='Search Images....'
            value={txt}
            onChange={(e)=>setTxt(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Search