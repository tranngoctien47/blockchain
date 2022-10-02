import P2PView from "@/views/p2ps/P2PView";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function P2PMarket() {
  return (
    <Flex w="full" direction="column">
      <Heading color="#b94b70" fontFamily="VT323">
        P2P TRADING
      </Heading>
      <Divider my="10px" />
      <P2PView />
    </Flex>
  );
}
