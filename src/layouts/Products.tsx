import { Box, Button, Flex, Heading, Spinner } from "@chakra-ui/react";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

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

const Products = () => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    const getOrders = async () => {
      let headersList = {
        Accept: "*/*",
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/x-www-form-urlencoded",
      };

      let response = await fetch(
        `http://localhost:3000/order_items?limit=${perPage}&offset=${
          (currentPage - 1) * perPage
        }`,
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();
      setOrders(data.data);
      setTotal(data.total);
    };

    getOrders();
  }, [currentPage, perPage]);

  return (
    <Box mb={100} pb={20}>
      {orders === null ? (
        <Box>
          <Flex alignItems={"center"} gap={5} justifyContent={"center"}>
            <Heading>Fetching Data</Heading>
            <Spinner size={"lg"} />
          </Flex>
        </Box>
      ) : (
        <Flex
          gap={{ lg: 20, md: 20, sm: 5, base: 5 }}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {orders && orders.length > 0 ? (
            orders.map((order: Order, key: any) => (
              <Card
                _id={order._id}
                freight_value={order.freight_value}
                order_id={order.order_id}
                order_item_id={order.order_item_id}
                price={order.price}
                product_id={order.product_id}
                seller_id={order.seller_id}
                shipping_limit_date={order.shipping_limit_date}
                key={key}
              />
            ))
          ) : (
            <Heading>No orders found</Heading>
          )}
          <Flex
            justifyContent={"space-between"}
            width={"100%"}
            px={{ lg: 20, md: 20, sm: 5, base: 5 }}
          >
            <Button
              width={"140px"}
              borderRadius={20}
              fontWeight={600}
              bg={"#111"}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              color={"#fff"}
              _hover={{ bg: "#111" }}
              leftIcon={<ArrowCircleLeft color="#fff" variant="Bold" />}
            >
              Previous
            </Button>
            <Button
              width={"140px"}
              borderRadius={20}
              fontWeight={600}
              disabled={currentPage * perPage >= total}
              onClick={() => setCurrentPage(currentPage + 1)}
              bg={"#111"}
              color={"#fff"}
              _hover={{ bg: "#111" }}
              rightIcon={<ArrowCircleRight color="#fff" variant="Bold" />}
            >
              Next
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Products;
