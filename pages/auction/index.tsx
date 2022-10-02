import { useAppSelector } from "@/reduxs/hooks";
import AuctionView from "@/views/auctions/AuctionView";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function index() {
  return (
    <Flex w="full" direction="column">
      <Heading color="#b94b70" fontFamily="VT323">
        Auction
      </Heading>
      <Divider my="10px" />
      <AuctionView />
    </Flex>
  );
}
