import { Announcement } from '../Components/Announcement/Announcement';
import Categories from '../Components/Categories/Categories';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Newsletter from '../Components/Newsletter/Newsletter';
import Products from '../Components/Products/Products';
import Slider from '../Components/Slider/slider';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
