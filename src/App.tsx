import { Container, Header } from "./App.styles";
import { ProductList } from "./components/ProductList";
import icon_type from "./icon/typescript_react_100px.png"

const App = () =>{
  const img_type = <img src={icon_type} alt="logo react + typeScript" />;
  return(
    <>
    <Header>{img_type}</Header>
     <Container>
       <ProductList />
     </Container>
    </>
  )
}

export default App;