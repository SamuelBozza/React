import Item from './Item'

function list() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferraria" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1964} />
                <Item marca={1} />
            </ul>
        </>
    )
}

export default list