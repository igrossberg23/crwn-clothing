import { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import './Checkout.scss';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				{['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
					(title) => (
						<div className='header-block'>
							<span>{title}</span>
						</div>
					)
				)}
			</div>
			{cartItems.map((item) => (
				<CheckoutItem
					key={item.id}
					cartItem={item}
				/>
			))}
			<span className='total'>Total: ${cartTotal}</span>
		</div>
	);
};

export default Checkout;
