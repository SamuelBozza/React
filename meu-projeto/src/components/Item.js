import PropTypes from 'prop-types'

function Item(marca, ano_lancamento) {
    return(
        <>
            <li>
                {props.marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
}

export default Item