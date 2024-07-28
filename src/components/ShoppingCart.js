import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  return (
    <div className="container">
      <div className="left-container">
        <div className="header">
          <div className="image-holder">
            <img src={`${process.env.PUBLIC_URL}/assets/truck.png`} alt="Shipping" />
          </div>
          <p>
            ADD MORE PRODUCTS WORTH <span className="bold-text">100 ₼</span> TO YOUR CART <br />
            <span className="bold-text"> DO NOT PAY SHIPPING FEE!</span>
          </p>
        </div>
        <div className="sec-container">
          <div className="store-name">
            <input
              style={{
                marginLeft: '20px',
                color: 'black',
                marginTop: '19px',
                width: '20px',
                height: '20px',
              }}
              type="checkbox"
            />
            <h3>
              <img className="bag" src={`${process.env.PUBLIC_URL}/assets/bag.png`} alt="" /> Magazanin adi
            </h3>
          </div>
          <div className="cart-item">
            <div className="img-cont">
              <input
                style={{
                  marginRight: '20px',
                  color: 'black',
                  marginTop: '25px',
                  width: '20px',
                  height: '20px',
                }}
                type="checkbox"
              />
              <div className="img-container">
                <img src={`${process.env.PUBLIC_URL}/assets/shampoo.png`} alt="Product Image" />
              </div>
            </div>
            <div className="product-info">
              <p>Naturalive Tüm Saç Tipleri İçin Şampuan 500ml</p>
              <div className="product-quantity">
                <span className="bold-text">17 ₼</span>
                <div className="quantity">
                  <button>-</button>
                  <input type="text" value="1" readOnly />
                  <button>+</button>
                </div>
              </div>
              <div className="cart-item-actions">
                <button className="btn add-to-favorites">
                  <img className="btn-img" src={`${process.env.PUBLIC_URL}/assets/white-heart.png`} alt="" /> Add to favorites
                </button>
                <button className="btn-delete">
                  <img className="btn-img" src={`${process.env.PUBLIC_URL}/assets/bin.png`} alt="" /> Delete item
                </button>
              </div>
            </div>
          </div>
          <a href="#" id="green" className="btn green-btn">
            <img src={`${process.env.PUBLIC_URL}/assets/left.png`} alt="" /> Continue shopping
          </a>
        </div>
      </div>
      <div className="right-container">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="item">
            <span>Ara Toplam</span>
            <span>2.108,33 TL</span>
          </div>
          <div className="item">
            <span>KDV</span>
            <span>421,67 TL</span>
          </div>
          <div className="item last-item">
            <span>KDV Dahil</span>
            <span>2.530,00 TL</span>
          </div>
          <div className="total">
            <span>Toplam</span>
            <span>2.530,00 TL</span>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;