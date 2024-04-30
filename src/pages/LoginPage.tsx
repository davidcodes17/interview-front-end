import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Box>
      <Flex flexWrap={"wrap"}>
        <Box
          width={{ lg: "40vw", md: "40vw", sm: "100vw", base: "100vw" }}
          height={"100vh"}
        >
          <Box p={10} mt={20} mx={{ lg: 10, md: 10, sm: 0, base: 0}}>
            <Heading>Welcome Back👋</Heading>
            <Text>Please fill in your appropriate details</Text>

            <Box mt={5}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input borderRadius={10} type="text" placeholder="seller_id " />
              </FormControl>
              <FormControl mt={5}>
                <FormLabel>Password</FormLabel>
                <Input
                  borderRadius={10}
                  type="text"
                  placeholder="seller_zip_code_prefix"
                />
              </FormControl>
              <Button
                width={"100%"}
                mt={5}
                py={6}
                borderRadius={15}
                bg={"darkorchid"}
                fontWeight={400}
                color={"#fff"}
                onClick={() => {}}
                _hover={{ bg: "darkorchid" }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Box>
        <Image
          bg={"darkorchid"}
          src="/bg.svg"
          width={"60vw"}
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          objectFit={"contain"}
          height={"100vh"}
        />
      </Flex>
    </Box>
  );
};

export default LoginPage;
