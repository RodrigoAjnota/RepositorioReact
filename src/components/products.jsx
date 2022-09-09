const Products = (props) => {
    return(
        <>
            <div>
                <h2>Producto: {props.name}</h2><br /> 
                <h3>Tipo: {props.type}</h3><br />
                <h3>Precio: ${props.prize}</h3><br />
                <p>Descripcion: {props.description}</p><br />
                <hr />
            </div>
        </>
    )
}

export default Products