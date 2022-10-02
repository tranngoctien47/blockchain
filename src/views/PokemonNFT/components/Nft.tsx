import { Clarity, INftItem, ActionType } from "@/_types_";
import {
  Flex,
  Image,
  Box,
  Text,
  HStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import React from "react";

interface IProps {
  item: INftItem;
  index: number;
  isTransfer?: boolean;
  isUnList?: boolean;
  isList?: boolean;
  isAuction?: boolean;
  onAction?: (action: ActionType) => void;
}

export default function Nft({
  item,
  index,
  isTransfer,
  isAuction,
  isList,
  isUnList,
  onAction,
}: IProps) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      px="10px"
      py="10px"
      borderRadius="50%"
    >
      <Box position="relative">
        <Image
          src={item.image}
          alt={item.name}
          objectFit="cover"
          borderRadius="10px"
          minHeight="300px"
          maxHeight="300px"
        />
        <Box position="absolute" top={5} right={10}>
          <Text
            fontWeight="bold"
            fontSize="40px"
            fontStyle="italic"
            fontFamily="VT323"
          >
            {
              Clarity[
                item.attributes?.find((p) => p.trait_type === "Rarity")
                  ?.value || 0
              ]
            }
          </Text>
        </Box>
        <HStack bg="rgba(0,0,0,0.4)" position="absolute" top={5} px="10px">
          <Text>ID: {item.id.toString().padStart(5, "0")}</Text>
        </HStack>
      </Box>
      <Text fontWeight="bold" py="10px" fontFamily="VT323">
        {item.name}
      </Text>
      {isList && isAuction && (
        <Flex w="full" justifyContent="center" gap="20px" fontFamily="VT323">
          <Button
            variant="primary"
            onClick={() => onAction && onAction("LIST")}
            fontFamily="VT323"
          >
            List
          </Button>
          <Button
            variant="primary"
            onClick={() => onAction && onAction("AUCTION")}
            fontFamily="VT323"
          >
            Auction
          </Button>
        </Flex>
      )}
      {isTransfer && (
        <Button
          variant="primary"
          w="80%"
          mt="10px"
          onClick={() => onAction && onAction("TRANSFER")}
          fontFamily="VT323"
        >
          Transfer
        </Button>
      )}

      {isUnList && (
        <Button
          variant="primary"
          w="full"
          mt="10px"
          onClick={() => onAction && onAction("UNLIST")}
        >
          UnList
        </Button>
      )}
    </Flex>
  );
}
