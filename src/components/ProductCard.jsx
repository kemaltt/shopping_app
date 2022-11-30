import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsCartPlus } from 'react-icons/bs'
import { BsCartCheckFill } from 'react-icons/bs'
import { MdCompareArrows } from 'react-icons/md'

export default function ProductCard({
  product,
  i,
  id,
  selected,
  addToCompare,
  removeToCompare,
  addToCart,
  removeToCart,
  selectedProducts,
  isAuthenticated,
}) {
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const removeCart = () => {
    !isAuthenticated
      ? alert('please log in before continuing')
      : removeToCart(product)
  }
  const addCart = () => {
    !isAuthenticated
      ? alert('please log in before continuing')
      : addToCart(product)
  }

  const productDetail = () => {
    navigate(
      isAuthenticated
        ? `/productdetail/${id}`
        : alert('please log in before continuing'),
    )
    setToggle(!toggle)
  }

  return (
    <div key={i} className="product_card">
      <img onClick={productDetail} src={product.image} alt={product.title} />
      <div className="product_body">
        <h3>{product.title} </h3>
        <p className="price">${product.price}</p>

        <div className="card_buttons">
          {selected && selected.includes(product) ? (
            <MdCompareArrows
              onClick={() =>
                !isAuthenticated
                  ? alert('please login before continuing')
                  : removeToCompare(product)
              }
              style={{ color: 'red' }}
            />
          ) : (
            <MdCompareArrows
              onClick={() =>
                !isAuthenticated
                  ? alert('please login before continuing')
                  : addToCompare(product)
              }
              style={{ color: 'yellowgreen' }}
            />
          )}
          <div className="cart_buttons">
            {selectedProducts && selectedProducts.includes(product) ? (
              <BsCartCheckFill
                style={{ color: 'green' }}
                onClick={removeCart}
              />
            ) : (
              <BsCartPlus style={{ color: 'orange' }} onClick={addCart} />
            )}
          </div>
        </div>
      </div>
      {/* {toggle ? (
        <div className="popup_container">
          <img
            style={{ width: '50%' }}
            src={product.image}
            alt={product.name}
          />
          <h3>{product.name} </h3>
          <p>{product.price}</p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '5px',
            }}
            className="star"
          >
            {[...Array(5)].map((star, i) => (
              <i
                style={{
                  fontSize: '1.5rem',
                  color: product.rating.rate >= i + 1 ? 'orange' : 'grey',
                }}
                class="las la-star"
              ></i>
            ))}
          </div>

          <button
            style={{
              background: 'red',
              border: 'none',
              padding: '5px 15px',
              color: 'white',
              fontSize: '1.2rem',
            }}
            onClick={productDetail}
          >
            x
          </button>
        </div>
      ) : null} */}
    </div>
  )
}
