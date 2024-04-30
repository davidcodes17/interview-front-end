import { Box, Flex, Heading } from "@chakra-ui/react";

interface Product {
  id: string;
  product_id: string;
  product_category: string;
  price: string;
  date: string;
}
const Card = (product: Product) => {
  return (
    <Box
      cursor={"pointer"}
      mt={10}
      width={{ lg: 250, md: 250, sm: 200, base: 180 }}
      minWidth={{ lg: 250, md: 250, sm: 200, base: 180 }}
    >
      {/* <Image src={"https://placehold.co/600x400" ? "" :""} /> */}
      <Box
        width={{ lg: 250, md: 250, sm: 200, base: 180 }}
        height={{ lg: 250, md: 250, sm: 200, base: 180 }}
        bg={"#000"}
        borderRadius={20}
      ></Box>
      <Box px={3}>
        <Heading fontSize={12} fontWeight={400} mt={2}>
          {product.product_id}
        </Heading>
        <Heading mt={2} fontWeight={500} fontSize={{ lg: 25, md: 25, sm: 20 }}>
          {product.product_category}
        </Heading>
        <Flex justifyContent={"space-between"} mt={5}>
          <Heading fontSize={15}>Price</Heading>
          <Heading fontSize={15}>${product.price}</Heading>
        </Flex>
        <Heading fontWeight={500} fontSize={15} mt={5}>
          {product.date}
        </Heading>
      </Box>
    </Box>
  );
};

export default Card;
