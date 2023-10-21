import { Announcement } from '../Components/Announcement/Announcement';
import Categories from '../Components/Categories/Categories';
import Navbar from '../Components/Navbar/Navbar';
import Slider from '../Components/Slider/slider';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </>
  );
};

export default Home;
