declare var window: any;
import { ConnectWallet, WalletInfo } from "@/components";
import { menus } from "@/constants";
import {
  setWalletInfo,
  setWeb3Provider,
} from "@/reduxs/accounts/account.slices";
import { useAppDispatch, useAppSelector } from "@/reduxs/hooks";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { ethers } from "ethers";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IProps) {
  const router = useRouter();
  console.log(router.pathname);

  const dispatch = useAppDispatch();
  const { wallet } = useAppSelector((state) => state.account);

  const onConnectMetamask = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        undefined
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const bigBalance = await signer.getBalance();
      const bnbBalance = Number.parseFloat(
        ethers.utils.formatEther(bigBalance)
      );
      dispatch(setWalletInfo({ address, bnb: bnbBalance }));
      dispatch(setWeb3Provider(provider));
    }
  };

  return (
    <>
      <Flex
        w={{ base: "full", lg: "full" }}
        flexDirection="column"
        margin="auto"
        p="20px"
        position="fixed"
        top="0"
        bottom="0"
        zIndex="10"
        opacity="0.85"
        overflow="auto"
      >
        <Flex w="full" alignItems="center" justifyContent="center">
          <Heading size="lg" fontWeight="bold" fontFamily="VT323">
            Blockchain
          </Heading>
          <Spacer />
          {menus.map((menu) => (
            <Link href={menu.url} key={menu.url}>
              <a>
                <Text
                  mx="20px"
                  fontSize="20px"
                  textDecoration="none"
                  fontFamily="VT323"
                >
                  {menu.name}
                </Text>
              </a>
            </Link>
          ))}

          {!wallet && <ConnectWallet onClick={onConnectMetamask} />}
          {wallet && (
            <WalletInfo address={wallet?.address} amount={wallet?.bnb || 0} />
          )}
        </Flex>
        {router.pathname == "/market" || router.pathname == "/p2p" ? (
          <Flex
            w="full"
            h="full"
            justifyContent="start"
            flexDirection="column"
            py="50px"
          >
            {children}
          </Flex>
        ) : (
          <Flex
            w="full"
            h="full"
            justifyContent="center"
            flexDirection="column"
            py="50px"
          >
            {children}
          </Flex>
        )}
        <Flex
          bg="url(./parallax-bg.gif)"
          backgroundSize="cover"
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          w="100vw"
          h="100vh"
          zIndex="-1"
        ></Flex>
      </Flex>
    </>
  );
}
