import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { LogoutCurve } from "iconsax-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [seller, setSeller] = useState<any>();
  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSeller(data?.data);
      });
  }, []);
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
        <Heading as={Link} to={"/home"}>
          Brazillian Style
        </Heading>
        <Flex gap={5} alignItems={"center"}>
          <Avatar as={Link} to={"/account"} name={seller?.seller_state} />
          <Box
            cursor={"pointer"}
            onClick={() => {
              localStorage.clear();
              location.href = "/";
            }}
          >
            <LogoutCurve size={30} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
