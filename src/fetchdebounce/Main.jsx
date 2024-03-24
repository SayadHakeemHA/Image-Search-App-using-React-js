import React, { useEffect, useState } from 'react'
import Search from './Search'
import Imgresults from './Imgresults'
import axios from 'axios'

function Main() {
    let [txt,setTxt]=useState('')
    let [debounce,setDebounce]=useState(txt)
    let [ data,setData] = useState([])

    // console.log('txt says '+txt);
    // console.log('debounce says '+debounce);

    let access_key = '2xc6_BQu6eyVhcv6BnIGqOPR0pR3DpHJdYc8_tS-N9Y'

useEffect(()=>{
    let timerId = setTimeout(() => {
        setDebounce(txt)
    },1000);

return ()=>{
    clearTimeout(timerId)
}

},[txt])

useEffect(()=>{
let search =async()=>{
    await axios
    .get(`https://api.unsplash.com/search/photos?client_id=${access_key}&query=${debounce}`)
    .then(response=>setData(response?.data?.results))
    .catch(err=>console.log(err))
}
if(debounce){
    search()
}

},[debounce])

  return (
    <div>

        <Search txt={txt} setTxt={setTxt}/>
        <Imgresults data={data}/>


    </div>
  )
}

export default Main