import { Box } from "@chakra-ui/react";
import Header from "../layouts/Header";
import Products from "../layouts/Products";
import HeroContent from "../layouts/HeroContent";

const Home = () => {
  return (
    <Box>
      <Header />
      <Box pt={100} px={{lg : 20, md : 20, sm : 5}}>
        <HeroContent />
        <Products />
      </Box>
    </Box>
  );
};

export default Home;
