import React from "react";
import Table from "react-bootstrap/Table";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useProductContext } from "../contexts/ProductContext";

export default function Contact() {
  const { selectedCartProducts, setSelectedCartProducts, removeFromCart } =
    useProductContext();
  // const [quantity, setQuantity] = useState(1)
  // console.log(selectedProducts)
  let total = 0;

  const decreaseQuantity = (product) => {
    if (selectedCartProducts.includes(product)) {
      if (product.count > 1) {
        product.count--;
        setSelectedCartProducts([...selectedCartProducts]);
      }
    }
  };
  const increaseQuantity = (product) => {
    if (selectedCartProducts.includes(product)) {
      product.count++;
      setSelectedCartProducts([...selectedCartProducts]);
    }
  };

  const totalAmount = selectedCartProducts.map((product) => {
    return product.price * product.count;
  });
  totalAmount.map((el) => (total += el));

  //     if (selectedProducts.includes(product)) {

  //     product.count++
  //   } else {
  //     product.count = 1
  //     setSelectedProducts([...selectedProducts, product])
  //   }

  return (
    <div className="cart">
      {selectedCartProducts.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Product title</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedCartProducts.map((product, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={product.image}
                    style={{ width: "25px" }}
                    alt={product.name}
                  />
                </td>
                <td>{product.title}</td>
                <td className="quantity_btn">
                  <button
                    onClick={() => decreaseQuantity(product)}
                    style={{ background: "red" }}
                  >
                    -
                  </button>
                  <span> {product.count} </span>
                  <button
                    onClick={() => increaseQuantity(product)}
                    style={{ background: "yellowgreen" }}
                  >
                    +
                  </button>
                </td>
                <td>${(product.price * product.count).toFixed(2)} </td>
                <td style={{ textAlign: "center" }}>
                  <RiDeleteBin6Fill
                    onClick={() => removeFromCart(product)}
                    style={{ color: "red" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th></th>
              <th>Total amount</th>
              <th>${total.toFixed(2)} </th>
              <th></th>
            </tr>
          </thead>
        </Table>
      ) : (
        <p
          style={{ textAlign: "center", color: "yellowgreen", margin: "3vh 0" }}
        >
          you have not selected any product
        </p>
      )}
    </div>
  );
}
