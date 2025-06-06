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
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import type { CartItem } from '../../store/cart/cart.types';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				{['Product', 'Description', 'Quantity', 'Price', 'Remove'].map(
					(title) => (
						<HeaderBlock key={title}>
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
