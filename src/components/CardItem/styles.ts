import styled from "styled-components";
import wishlist_default from "../../icon/wishlist_default.png";
import wishlist_default_hover from "../../icon/wishlist_default_hover.png";
import wishlist_selected from "../../icon/wishlist_selected.png";
import wishlist_selected_hover from "../../icon/wishlist_selected_hover.png";

interface Props {
  stateButton: boolean;
}

export const Card = styled.span`
  margin: 20px;
  padding: 32px;
  border-radius: 8px;
  background: #ffffff;
  color: #1c1c1c;
  .description {
    margin: 0px;
    margin-top: 32px;
    padding: 0px;
    height: 60px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #1c1c1c;
    width: 240px;
  }
  .old-price {
    margin: 0px;
    margin-top: 24px;
    padding: 0px;
    font-size: 14px;
    color: #b5b5b6;
    text-decoration: line-through;
    line-height: 20px;
  }
  .price {
    margin: 0px;
    margin-top: 4px;
    padding: 0px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #da4b4f;
  }
  .payment {
    margin: 0px;
    margin-top: 4px;
    margin-bottom: 32px;
    font-size: 12px;
    line-height: 16px;
    padding: 0px;
    color: #848587;
    font-weight: 500;
  }
  .payment span {
    color: #1c1c1c;
  }
`;

export const WhishList = styled.div(
  ({ stateButton }: Props) => `
width: 48px;
height: 48px;
background-image:url(${stateButton ? wishlist_selected : wishlist_default});
&:hover{
  background-image:url(${stateButton ? wishlist_selected_hover : wishlist_default_hover
    });
}
position: absolute;
margin-left:192px;
`
);
