import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services';

const Categories = () => {

  const [cateogires, setCateogires] = useState([])

  useEffect(() => {

    async () => {
      setCateogires(await getCategories())
    }
    

  }, [])

  return (
    <div>Categories</div>
  )
}

export default Categories