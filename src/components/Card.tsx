import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Trash } from "iconsax-react";
import React from "react";

interface Order {
  _id: string;
  order_id: string;
  order_item_id: string;
  product_id: string;
  seller_id: string;
  shipping_limit_date: string;
  price: string;
  freight_value: string;
}
const Card = (product: Order) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLDivElement>(null!);
  const deleteOrder = async (id: string) => {
    let headersList = {
      Accept: "*/*",
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    let response = await fetch("http://localhost:3000/order_items/" + id, {
      method: "DELETE",
      headers: headersList,
    });

    let data = await response.text();
    console.log(data);
  };
  return (
    <Box
      cursor={"pointer"}
      mt={10}
      width={{ lg: 250, md: 250, sm: 200, base: 180 }}
      minWidth={{ lg: 250, md: 250, sm: 200, base: 180 }}
      maxWidth={{ lg: 250, md: 250, sm: 200, base: 180 }}
    >
      <Box
        width={{ lg: 250, md: 250, sm: 200, base: 180 }}
        height={{ lg: 250, md: 250, sm: 200, base: 180 }}
        bg={"#000"}
        borderRadius={20}
      ></Box>
      <Box px={3}>
        <Heading fontSize={12} fontWeight={800} mt={2}>
          {product._id}
        </Heading>
        <Text mt={3}>Seller ID</Text>
        <Heading fontSize={10}>{product.seller_id}</Heading>
        <Flex justifyContent={"space-between"} mt={5}>
          <Heading fontSize={15}>Price</Heading>
          <Heading fontSize={15}>${product.price}</Heading>
        </Flex>
        <Flex alignItems={"center"} justifyContent={"space-between"} mt={5}>
          <Heading fontSize={15}>{product.shipping_limit_date}</Heading>
          <Box>
            <Trash variant="Bold" color="tomato" onClick={onOpen} />
          </Box>
        </Flex>
      </Box>
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Course
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You want to delete this Order Item
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    onClose();
                    deleteOrder(product.order_id);
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </Box>
  );
};

export default Card;
