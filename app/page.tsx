import Details from "./pages/Details";
import Products from "./components/Products";
import MainPage from "./pages/Main";
import Instal1 from "./components/installation";

export default function Home() {
  return (
    
    <div>
      <MainPage />      
      <Details />
      <Instal1 />
      <Products />
    </div>
  );
}
