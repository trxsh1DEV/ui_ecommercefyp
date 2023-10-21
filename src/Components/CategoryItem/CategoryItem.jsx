import { Button, Container, Image, Info, Title } from './styles';
import P from 'prop-types';

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

CategoryItem.propTypes = {
  item: P.shape({
    id: P.number.isRequired,
    img: P.string.isRequired,
    title: P.string.isRequired,
  }),
};

export default CategoryItem;
