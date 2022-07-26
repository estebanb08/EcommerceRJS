import './css/itemListContainer.css';
import ItemCount from './itemCount.js';
import { useEffect, useState } from "react";
import ItemList from "./itemList";
import { createData, deleteData, updateData } from "./api";

const ItemListContainer = ({greeting}) => { 

    const [items, setItems] = useState([])
  const postId = 4

  useEffect(() => {
    // mock()
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    // createData()
    // const product = {
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 2,
    // }
    // updateData(product)
    // deleteData(postId)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setItems(data) // actualizo el estado de react
      })
    
  }, [])

  return (
    <div>
      <h3>{greeting}</h3>
      <ItemCount initial={1} stock={15}/>
      <ItemList items={items} />
    </div>
  );
}

    
export default ItemListContainer;
