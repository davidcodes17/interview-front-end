import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      p={10}
      pos={"fixed"}
      bottom={0}
      right={0}
      borderTopRadius={40}
      left={0}
      bg={"#111"}
      textAlign={"center"}
    >
      <Text color={"#fff !important"}>
        &copy; All rights reserved @Areegbe David
      </Text>
    </Box>
  );
};

export default Footer;
