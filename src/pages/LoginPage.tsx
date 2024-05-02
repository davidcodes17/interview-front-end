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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const LoginPage = () => {
  const toast = useToast();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const login = async () => {
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      username: user.username,
      password: user.password,
    });

    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    localStorage.setItem("token",data.token)
    console.log(data);
    if (data.token) {
      toast({
        title: data.msg,
        description: "Login Success",
        isClosable: true,
        status: "success",
        duration: 2000,
        position: "top-right",
      });
      location.href = "/home";
    } else {
      toast({
        title: data.msg,
        description: "Error encountered when logging in",
        isClosable: true,
        status: "error",
        duration: 2000,
        position: "top-right",
      });
      setUser({
        username: "",
        password: "",
      });
    }
  };
  return (
    <Box>
      <Flex flexWrap={"wrap"}>
        <Box
          width={{ lg: "40vw", md: "40vw", sm: "100vw", base: "100vw" }}
          height={"100vh"}
        >
          <Box p={10} mt={20} mx={{ lg: 10, md: 10, sm: 0, base: 0 }}>
            <Heading>Welcome Back👋</Heading>
            <Text>Please fill in your appropriate details</Text>

            <Box mt={5}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  value={user.username}
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                  borderRadius={10}
                  type="text"
                  placeholder="seller_id "
                />
              </FormControl>
              <FormControl mt={5}>
                <FormLabel>Password</FormLabel>
                <Input
                  borderRadius={10}
                  type="password"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                  placeholder="seller_zip_code_prefix"
                />
              </FormControl>
              <Button
                width={"100%"}
                mt={5}
                // as={Link}
                // to={"/home"}
                py={6}
                borderRadius={15}
                bg={"darkorchid"}
                fontWeight={400}
                color={"#fff"}
                onClick={() => {
                  console.log(user);
                  login();
                  console.log(user);
                }}
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
