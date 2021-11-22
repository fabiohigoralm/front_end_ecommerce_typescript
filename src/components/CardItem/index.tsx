import { useState } from 'react';
import { Card, WhishList } from './styles';
import { ButtonAdd } from '../ButtonAdd'

interface Props {
  item: {
    id: number;
    imagePath: string;
    nameDescription: string;
    oldPrice: string;
    price: string;
    payment: string;
  }
}

export const CardItem = ({ item }: Props) => {
  const [whishListButton, setWhishListButton] = useState(false);
  const onClickWishButton = () => setWhishListButton((whishListButton) => !whishListButton);

  return (
    <Card>
      <WhishList stateButton={whishListButton} onClick={onClickWishButton} ></WhishList>
      <img src={item.imagePath} alt={item.nameDescription} />
      <p className="description">{item.nameDescription}</p>
      <p className="old-price">{item.oldPrice}</p>
      <p className="price">{item.price}</p>
      <p className="payment">
        em até <span>{item.payment}</span>sem juros
      </p>
      <ButtonAdd />
    </Card>
  )
}

