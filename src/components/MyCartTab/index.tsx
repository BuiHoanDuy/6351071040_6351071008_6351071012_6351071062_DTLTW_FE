import Button from '@components/Button';
import CartItem from '@components/CartItem';
import EmptyCard from '@components/Icons/EmptyCard';
import Right from '@components/Icons/Right';
import SignInAlert from '@components/Icons/SignInAlert';
import { API_BACKEND_ENDPOINT } from '@constant/Api';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export interface CartItemData {
  id: string;
  name: string;
  price: number;
  variants: any;
  color: string;
  count: number;
}

interface myCartProp {
  isOpen: boolean;
  isSignedIn: boolean;
  onToggle: any;
  toggleCart: () => void;
  handleShopNow: () => void;
  account_id: any;
  refetch?: boolean;
}
const MyCartTab: React.FC<myCartProp> = ({
  isOpen,
  isSignedIn,
  onToggle,
  toggleCart,
  account_id,
  refetch,
  handleShopNow,
}) => {
  const [cartItemList, setCartItemList] = useState<CartItemData[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BACKEND_ENDPOINT}/api/carts/${account_id}`);
        const data: CartItemData[] = response.data.responseData.map((item: any) => ({
          id: item.id,
          name: item.product_name,
          color: item.product_color,
          image: item.product_image,
          price: item.product_price,
          count: item.product_quantity,
          variants: JSON.parse(item.variants)
        }));
        setCartItemList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (account_id) {
      fetchData();
    }
  }, [account_id, refetch]); // condition loop of useEffect'

  useEffect(() => {
    if (cartItemList.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [cartItemList]);

  const handleBuyNow = () => {
    const listProd = cartItemList.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        variants: [
          {
            id: item.variants[0].Id,
            color: item.color,
            image: item.variants[0].Images,
            count: item.count,
          },
        ],
      };
    });
    navigate('/checkout', {
      state: {
        products: listProd,
      },
    });
    handleShopNow();
  };
  return (
    <div className={`${styles.MyCart}`}>
      <>
        <div className={`MyCart-overlay  ${isOpen ? 'open' : ''}`} onClick={toggleCart}></div>
        <div className={`MyCart-container  ${isOpen ? 'open' : ''}`}>
          <div className='MyCart-header'>
            <p>My card</p>
            <div className='MyCart-count'>
              <span>Summary</span>
              <p>{cartItemList.reduce((sum, item) => sum + item.count, 0)}</p>
              <span>items</span>
            </div>
          </div>
          {isEmpty && isSignedIn && (
            <div className='MyCart-empty'>
              <EmptyCard></EmptyCard>
              <span>Your shopping cart is currently empty.</span>
              <div
                className='MyCart-shopping'
                onClick={() => {
                  handleShopNow();
                }}
              >
                <p>Shop Now</p>
                <Right></Right>
              </div>
            </div>
          )}
          {!isSignedIn && (
            <div className='MyCart-notSignIn'>
              <SignInAlert></SignInAlert>
              <span>You need to Sign In to see list cart.</span>
              <div className='MyCart-notSignIn'>
                <Link to='sign-in'>
                  <Button
                    isPrimary
                    onClick={() => {
                      onToggle(false);
                    }}
                  >
                    Sign In Now
                  </Button>
                </Link>
              </div>
            </div>
          )}
          {!isEmpty && isSignedIn && (
            <div className='MyCart-list'>
              <div className='MyCart-items'>
                {cartItemList.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    color={item.color}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                    image={item.variants[0].Images}
                    onChange={setCartItemList}
                  />
                ))}
              </div>
              <div className='MyCart-total'>
                <div className='MyCart-subTotal'>
                  <p>Subtotal :</p>
                  <p>
                    $
                    {cartItemList
                      .reduce((sum, item) => sum + item.price * item.count, 0)
                      .toFixed(2)}
                  </p>
                </div>
                <div className='MyCart-subTotal'>
                  <p>Shipping: </p>
                  <p>Free</p>
                </div>
                <hr />
                <div className='MyCart-subTotal'>
                  <p className='total'>Total :</p>
                  <p className='total'>
                    $
                    {cartItemList
                      .reduce((sum, item) => sum + item.price * item.count, 0)
                      .toFixed(2)}
                  </p>
                </div>
                <Button className='btn_submitContact' onClick={handleBuyNow} isPrimary>
                  Buy now
                </Button>
              </div>
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default MyCartTab;
