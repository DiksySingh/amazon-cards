import "./Price.css";

export default function Price({oldPrice, newPrice}) {
    let styles = {
        textDecorationLine: "line-through"
    }
  return (
    <div  className="Price">
        <span style={styles}>&#8377;{oldPrice} </span> &nbsp;&nbsp;
        <span>&#8377;{newPrice}</span>
    </div>
  );
}
