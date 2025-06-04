import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
} from './Checkout.styles';
import { useSelector } from 'react-redux';
import {
	selectCartItems,
	selectCartTotal,
} from '../../store/cart/cart.selector';
import type { CartItem } from '../../types';
import PaymentForm from '../../components/PaymentForm/PaymentForm';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

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
			{cartItems.map((item: CartItem) => (
				<CheckoutItem
					key={item.id}
					cartItem={item}
				/>
			))}
			<Total>Total: ${cartTotal}</Total>
			<PaymentForm />
		</CheckoutContainer>
	);
};

export default Checkout;
