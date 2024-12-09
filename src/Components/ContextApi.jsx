import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let apiData = createContext()

const ContextApi = ({ children }) => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        const response = await axios.get('https://dummyjson.com/products')
        setProducts(response.data);
    }

    useEffect(() => {
        getData()
    }, [])

    return <apiData.Provider value={products}>{children}</apiData.Provider>
}

export { ContextApi, apiData };