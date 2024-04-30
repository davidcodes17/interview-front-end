import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { ArrowCircleLeft } from "iconsax-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box>
      <Flex mt={{lg : 20, md : 20, sm : 100, base : 70}} justifyContent={"center"}>
        <Box>
          <Heading fontSize={{ sm: 200, base: 100, md: 200, lg: 200 }}>
            4<span style={{ color: "darkorchid" }}>0</span>4
          </Heading>
          <Button
            bg={"darkorchid"}
            color={"#fff"}
            _hover={{ bg: "darkorchid" }}
            leftIcon={<ArrowCircleLeft color="#fff" variant="Bold" />}
            py={7}
            as={Link}
            to={"/home"}
            borderRadius={40}
            width={"100%"}
          >
            Back to Safety
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default NotFound;
