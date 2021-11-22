import { CardItem } from "../CardItem"
import data from '../../data'

export const ProductList = () => {
    return (
        <>
            {data.map((item, index) => (
                <CardItem
                    key={index}
                    item={item}
                />
            ))}
        </>
    )
}
