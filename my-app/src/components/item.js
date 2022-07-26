import charge from './assets/img/charge.jpg'

const Item = ({ item }) => {
  return (
    <div>
      <img src={charge} />
      <div>
        <h3>{item.name}</h3>
        <p>
          {`Usuario: ${item.username}, Mail: ${item.email}`}
        </p>
        <Button>Ver detalle</Button>
      </div>
    </div>
  );
}
 
export default Item;