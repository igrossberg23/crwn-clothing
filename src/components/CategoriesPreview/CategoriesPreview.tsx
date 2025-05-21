import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
	const { categoryMap } = useContext(CategoriesContext);

	return (
		<>
			{Object.keys(categoryMap).map((title) => (
				<CategoryPreview
					key={title}
					title={title}
					products={categoryMap[title]}
				/>
			))}
		</>
	);
};

export default CategoriesPreview;
