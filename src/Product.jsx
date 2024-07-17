import Price from "./Price.jsx";
import "./Product.css";

export default function Product({title, idx}) {
    let oldPrice=["12,499","8,999","4,500","999"];
    let newPrice=["8,999","6,500","3,465","678"];
    let description=["5 Programmable Buttons","Intuitive touch surface","Compatible Design","Wireless Mouse 2.4GHz"];
  return (
    <div className="Product">
        <div className="container">
        <p>{title}</p>
        <p>{description[idx]}</p>
        </div>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
    </div>
  )
}