import {Link, useNavigate} from 'react-router-dom'
import useFetchComponent from './useFetch'
import { useState,useEffect } from 'react'

const Category=()=> {
    const [data] = useFetchComponent('https://fakestoreapi.com/products/categories')
    // useEffect(()=>{
    //     useFetch('https://fakestoreapi.com/products/categories')
    //         .then(response=>response.json())
    //         .then((data)=>setData(data))
    //         .catch((error)=>console.error(error))
    // },[])
    const History=useNavigate()
    const HandleInput=(value)=>{
        History(`/${value}`)
    }

    const [datas,setData]=useState([]);
    const [filterdata,setFilterdata]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(response=>response.json())
            .then(datas=>setFilterdata(datas))
            .catch(error=>console.error(error))
    },[])
    const HandleChange=(value)=>{
        const result=filterdata.filter(datas=>datas.toLowerCase().includes(value))
        setData(result)
        if(value===''){
            setData([])
        }
    }
    
    return(<>
    <div className="bg-img">
        
        <form className="form">
            <input type="text" placeholder="Search..." className="input" onChange={(event)=>HandleChange(event.target.value)}/>
            <div className='search-product'>
               {datas.map((data,i)=>(
                <div><Link to={data} className="text">
                    {data}
                </Link>
                </div>
               )
            )}
            </div>
            </form>

        <div className='bg-button'>
            <Link to="">
                <button>EXPLORE</button>
            </Link>
        </div>
    </div>

    <div id="main-page">
    {data? (
        <>
         
        <div className="category-first-div">
            {data.map((value)=>(
                <Link id="categories" to={value} onClick={()=>HandleInput(value)}><span className="category-span">{value}</span></Link>
            ))} <br/>   
        </div>
        <div className="category-second-div">
            {data.map((value)=>(
                <Link id="categories" to={value} onClick={()=>HandleInput(value)}><div className="category-div">{value}</div></Link>
            ))} <br/>
              
        </div>
        <div className="allproduct-button">
            <Link to="/allproducts" className="allproduct">ALL PRODUCTS</Link>
        </div> 
    
                    </>):(
        <p>Loading Data....</p>
    )
    }
    
    </div>
    </>
)}
export default Category