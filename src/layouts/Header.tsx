import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        p={5}
        pos={"fixed"}
        alignItems={"center"}
        left={0}
        right={0}
        bg={"transparent"}
        backdropFilter={"blur(20px)"}
        zIndex={99}
      >
        <Heading as={Link} to={"/home"}>Brazillian Style</Heading>
        <Avatar as={Link} to={"/account"} name="SP" />
      </Flex>
    </Box>
  );
};

export default Header;
