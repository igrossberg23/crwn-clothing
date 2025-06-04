import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
	FormContainer,
	PaymentButton,
	PaymentFormContainer,
} from './PaymentForm.styles';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) return;

		try {
			setIsProcessingPayment(true);
			const response = await fetch(
				'/.netlify/functions/create-payment-intent',
				{
					method: 'post',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ amount: amount * 100 }),
				}
			).then((res) => res.json());

			const clientSecret = response.paymentIntent.client_secret;

			const paymentResult = await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement)!,
					billing_details: {
						name: currentUser ? currentUser.displayName : 'Guest',
					},
				},
			});

			if (paymentResult.error) {
				alert(paymentResult.error.message);
			} else if (paymentResult.paymentIntent.status === 'succeeded') {
				alert('Payment Successful');
			}
		} catch (error) {
			console.log({ error });
			alert('Something went wrong contacting backend');
		} finally {
			setIsProcessingPayment(false);
		}
	};

	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<PaymentButton
					buttonType='inverted'
					isLoading={isProcessingPayment}>
					Pay Now
				</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	);
};

export default PaymentForm;
