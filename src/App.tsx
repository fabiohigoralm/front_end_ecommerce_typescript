import { Container, Header } from "./App.styles";
import { ProductList } from "./components/ProductList";
import icon_b8one from "./icon/b8one_icon.svg"
import icon_type from "./icon/typescript_react_100px.png"

const App = () =>{
  const img_b8one = <img src={icon_b8one} alt="logo b8one" />;
  const img_type = <img src={icon_type} alt="logo react + typeScript" />;
  return(
    <>
    <Header>{img_b8one}{img_type}</Header>
     <Container>
       <ProductList />
     </Container>
    </>
  )
}

export default App;