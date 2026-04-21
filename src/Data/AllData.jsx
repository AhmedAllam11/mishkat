import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'

const apiValue=createContext([])
const AllData = ({children}) => {
    const [api,setapi]=useState([]);
    useEffect(()=>{axios.get('/Data.json')
        .then((e)=>{
            setapi(e.data.products)
        })

    },[])
  return (
    <apiValue.Provider value={api}>
          {children}
    </apiValue.Provider>
  )
}

export {AllData , apiValue};