import React from 'react'
import "./Style/items.css"
import item1 from "../Assets/Images/item1.png"
import item2 from "../Assets/Images/item2.png"
import item3 from "../Assets/Images/item3.png"
import item4 from "../Assets/Images/item4.png"
export default function Items() {
    const items=[
        {
            img : item1,
            name: "Wireless Noise Cancelling Headphones",
            version : "WH-1000XM4",
            price : "29,000"
        },
        {
            img : item2,
            name: " Smart TV (Google TV)",
            version : "W830K",
            price : "34,000"
        },
        {
            img : item3,
            name: " EOS R6 Mark II (RF24-105mm f/4L IS USM)",
            version : "RF24",
            price : "1,35,000"
        },
        {
            img : item4,
            name: "XPS 13 2-in-1 Laptop",
            version : "2880X1920",
            price : "1,64,000"
        },
        {
            img : item1,
            name: "Wireless Noise Cancelling Headphones",
            version : "WH-1000XM4",
            price : "29,000"
        },
        {
            img : item2,
            name: " Smart TV (Google TV)",
            version : "W830K",
            price : "34,000"
        },
        {
            img : item3,
            name: " EOS R6 Mark II (RF24-105mm f/4L IS USM)",
            version : "RF24",
            price : "1,35,000"
        },
        {
            img : item4,
            name: "XPS 13 2-in-1 Laptop",
            version : "2880X1920",
            price : "1,64,000"
        }
    ]
    const Item =({item})=>{
        return (
            <div className="item">
                <img src={item.img} className="image"/>
                <div className='name'>{item.name}</div>
                <div className='ver'>{item.version}</div>
                <div className='price'>MRP Rs {item.price}/-</div>
            </div>
        )
    }
  return (
    <div className='items'>
        {
            items.map((item,id)=>{
                return (
                    <Item key={id} item={item}/>
                )
            })
        }
       
    </div>
  )
}
