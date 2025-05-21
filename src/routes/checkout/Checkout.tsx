import { useContext } from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import { CartContext } from '../../contexts/Cart/CartContext';
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './Checkout.styles';

const Checkout = () => {
	const { cartItems, cartTotal } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				{['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
					(title) => (
						<HeaderBlock>
							<span>{title}</span>
						</HeaderBlock>
					)
				)}
			</CheckoutHeader>
			{cartItems.map((item) => (
				<CheckoutItem
					key={item.id}
					cartItem={item}
				/>
			))}
			<Total>Total: ${cartTotal}</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
