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
import Footer from "../layouts/Footer";
import { useEffect, useState } from "react";

const Account = () => {
  const [seller, setSeller] = useState({
    seller_city: "",
    seller_state: "",
  });
  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const sellerDetail = data.data;

        if (data.msg === "Invalid Token") {
          location.href = "/";
        } else {
          setSeller(sellerDetail);
          console.log(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateSeller = async () => {
    let headersList = {
      Accept: "*/*",
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      seller_city: seller.seller_city,
      seller_state: seller.seller_state,
    });

    let response = await fetch("http://localhost:3000/account", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    setSeller(data);
  };
  return (
    <>
      <Box>
        <Header />
        <Flex mb={50} pb={100} justifyContent={"center"}>
          <Box width={500} mt={150} px={10}>
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
              <Input
                value={seller.seller_city}
                onChange={(e) => {
                  setSeller({ ...seller, seller_city: e.target.value });
                }}
                type="text"
                placeholder="Redemption City"
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Seller State</FormLabel>
              <Input
                value={seller.seller_state}
                onChange={(e) => {
                  setSeller({ ...seller, seller_state: e.target.value });
                }}
                type="text"
                placeholder="Ogun State"
              />
            </FormControl>
            <Button
              mt={5}
              py={6}
              width={"100%"}
              bg={"darkorchid"}
              borderRadius={10}
              onClick={() => {
                updateSeller();
                console.log(seller.seller_city);
                console.log(seller.seller_state);
              }}
              color={"#fff"}
              _hover={{ bg: "darkorchid" }}
            >
              Update Details
            </Button>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Account;
