import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/_navbar";
import NavHeading from "./components/NavHeading";
import Banner from "./components/banner";
import ChangO from "./pages/ChangO";
import Details from "./pages/Details";
import Products from "./components/Products";
import MainPage from "./pages/Main";

export default function Home() {
  return (
    
    <div>
      <MainPage />
    <Details />
    <Products />
    </div>
  );
}
