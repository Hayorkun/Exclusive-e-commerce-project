import ProductDetail from '../component/ProductDetail'
import RelatedItems from '../component/RelatedItems'
import { useParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const ProductDetailPage = () => {

    const { id } = useParams();
  const { products } = useShop();
  const product = products.find((p) => p.id === Number(id));

  return (
    <>
    <ProductDetail/>
    <RelatedItems  category={product?.category} currentId={product?.id}/>
    </>
  )
}

export default ProductDetailPage