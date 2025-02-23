import Product from "./Product.jsx";

export default function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    }
  return (
    <div style={styles}>
        <Product title="Logitech MX Master 3S" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-Transformer" idx={2}/>
        <Product title="Portronics Toad 23 Wireless Mouse" idx={3}/>
    </div>
  )
}
