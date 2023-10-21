import { popularProducts } from '../../utils/data';
import Product from '../Product/Product';
import { Container } from './styles';

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
