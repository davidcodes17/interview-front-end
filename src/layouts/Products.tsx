import { Box, Flex } from "@chakra-ui/react";
import Card from "../components/Card";

const Products = () => {
  const date = new Date();
  return (
    <Box pb={20}>
      <Flex
        gap={{ lg: 20, md: 20, sm: 5, base: 5 }}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={2}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={1}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={3}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={3}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={4}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={5}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={2}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={1}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={3}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={4}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={5}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={2}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={1}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={3}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={4}
        />
        <Card
          date={date.toDateString()}
          id="2233353"
          price="50000"
          product_category="Food & Drinks"
          product_id="d4057be40c7a472ea54dfb052317b61c"
          key={5}
        />
      </Flex>
    </Box>
  );
};

export default Products;
