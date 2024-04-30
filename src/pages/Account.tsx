import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Header from "../layouts/Header";

const Account = () => {
  return (
    <Box>
      <Header />
      <Flex justifyContent={"center"}>
        <Box width={500} mt={200} px={10}>
          <Heading textAlign={"center"} pb={2}>
            Account Page
          </Heading>
          <Flex justifyContent={"center"}>
            <Text
              textAlign={"center"}
              border={"1px solid #ddd"}
              width={"fit-content"}
              py={2}
              px={8}
              borderRadius={20}
              mb={10}
            >
              areegbedavid
            </Text>
          </Flex>
          <FormControl>
            <FormLabel>Seller City</FormLabel>
            <Input type="text" placeholder="Redemption City" />
          </FormControl>
          <FormControl mt={5}>
            <FormLabel>Seller State</FormLabel>
            <Input type="text" placeholder="Ogun State" />
          </FormControl>
          <Button
            mt={5}
            py={6}
            width={"100%"}
            bg={"darkorchid"}
            borderRadius={10}
            color={"#fff"}
            _hover={{bg : "darkorchid"}}
          >
            Update Details
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Account;
