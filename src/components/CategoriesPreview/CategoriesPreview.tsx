import CategoryPreview from '../CategoryPreview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
	const categoryMap = useSelector(selectCategoriesMap);

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
