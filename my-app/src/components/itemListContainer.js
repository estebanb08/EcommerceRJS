import './css/itemListContainer.css';
import ItemCount from './itemCount.js';

const ItemListContainer = ({greeting}) => { 
    return(
    <div>
        <h2>{greeting}</h2>
        <ItemCount initial={1} stock={15}/>
    </div>
    )
   
}
    
export default ItemListContainer;