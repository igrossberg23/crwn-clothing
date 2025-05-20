import { useContext } from 'react';
import './Shop.scss';
import { ProductsContext } from '../../contexts/ProductsContext';
import ProductCard from '../../components/ProductCard/ProductCard';

const Shop = () => {
	const { products } = useContext(ProductsContext);

	return (
		<div className='products-container'>
			{products.map((product) => (
				<ProductCard
					product={product}
					key={product.id}
				/>
			))}
		</div>
	);
};

export default Shop;
