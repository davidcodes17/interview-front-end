import { Box, Heading } from "@chakra-ui/react";

const HeroContent = () => {
  return (
    <Box p={{ lg: 20, md: 20, sm: 10, base: 10 }}>
      <Heading
        textAlign={"center"}
        fontSize={{ lg: 70, md: 60, sm: 40, base: 20 }}
      >
        Welcome to the Store
      </Heading>
    </Box>
  );
};

export default HeroContent;
