import logo from './logo.svg';
import './App.css';
import ProductsList from "./components/ProductsList";
import React from 'react';

class App extends React.Component
{
  state = {
    products: [],
    name: '',
    count: 0
  }

  componentDidMount()
  {
    this.cargarProductos();
  }

  handleEliminar = (productId) => 
  {
    const newProductsList = this.state.products.filter( (product) =>
       product.id != productId )
    
    this.setState({
      products: newProductsList
    })
    
  }

  handleSubmit = (event) =>
  {
    event.preventDefault();
    const lengthProducts = this.state.products.length;
    const lastId = this.state.products[lengthProducts-1].id;

    const newProductsList = [
      ...this.state.products,
      {
        id: lastId+1,
        name: this.state.name,
        count: this.state.count
      }
    ];

    this.setState({
      products: newProductsList
    })

  }

  handleCancel = () =>
  {
    this.setState({
      name: '',
      count: 0
    })
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    
    this.setState({
      [name]: value
    })
  }

  cargarProductos = async () =>{
    try {

      const url = "http://localhost:3000/productos.json";

      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        products: [...this.state.products ,
          ...data]
      })

      console.log("data");
      console.log(data);
      
    } catch (error) {
      console.log("ERROR!!", error.message);
    }
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.cargarProductos} >Load</button>
            <h3>Todos los productos</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="name"/>
              <input
                type="number"
                name="count"
                value={this.state.count}
                onChange={this.handleChange}
                placeholder="count"/>
              <button type="button" onClick={this.handleCancel}>Cancelar</button>
              <button type="submit">Agregar</button>
            </form>
            <ProductsList products={this.state.products} onEliminar={this.handleEliminar}/>

            {/* <h4>Productos sin stock</h4>
            <ProductsList products={this.state.products.filter( (product) => product.count <= 0 )} />


            <h4>Productos con stock</h4>
            <ProductsList products={this.state.products.filter( (product) => product.count > 0 )} /> */}
          </header>
        </div>
  );
  }

}

export default App;
