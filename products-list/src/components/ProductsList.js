import React from 'react';

class ProductsList extends React.Component
{

    handleClick = (productId) =>
    {
        this.props.onEliminar(productId)
    }
    render() 
    {
        return ( 
                <ol>
        {this.props.products.map( product => {
            return (

                <li key={product.id}>{`nombre: ${product.name} - cantidad: ${product.count}`} <span onClick={() => this.handleClick(product.id)}>[Eliminar!!]</span></li>

            )
        }
        )}
    </ol>
            
        )
    }
}

export default ProductsList;