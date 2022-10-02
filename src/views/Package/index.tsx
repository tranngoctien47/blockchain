declare var window: any;
import React from "react";
import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { ConnectWallet, SuccessModal, WalletInfo } from "../../components";
import { IPackage, IRate, IWalletInfo, TOKEN } from "../../_types_";
import { ethers } from "ethers";
import { packages } from "../../constants";
import InvestCard from "./components/InvestCard";
import CrowSaleContract from "../../contracts/CrowdSaleContract";
import UsdtContract from "../../contracts/UsdtContract";
import { useAppSelector } from "@/reduxs/hooks";

export default function Package() {
  const { web3Provider, wallet } = useAppSelector((state) => state.account);
  const [rate, setRate] = React.useState<IRate>({ bnbRate: 0, usdtRate: 0 });
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [pak, setPak] = React.useState<IPackage>();
  const [txHash, setTxHash] = React.useState<string>();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const getRate = React.useCallback(async () => {
    const crowdContract = new CrowSaleContract();
    const bnbRate = await crowdContract.getBnbRate();
    const usdtRate = await crowdContract.getUsdtRate();
    setRate({ bnbRate, usdtRate });
  }, []);

  React.useEffect(() => {
    getRate();
  }, [getRate]);

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
      setWallet({ address, bnb: bnbBalance });
      setWeb3Provider(provider);
    }
  };

  const handleBuyIco = async (pk: IPackage) => {
    if (!web3Provider) return;
    setPak(pk);
    setIsProcessing(true);
    let hash = "";
    const crowdContract = new CrowSaleContract(web3Provider);
    if (pk.token === TOKEN.USDT) {
      const usdtContract = new UsdtContract(web3Provider);
      await usdtContract.approve(
        crowdContract._contractAddress,
        pk.amount / rate.bnbRate
      );
      hash = await crowdContract.buyTokenByUSDT(pk.amount);
    } else {
      hash = await crowdContract.buyTokenByBNB(pk.amount);
    }
    setTxHash(hash);
    onOpen();
    try {
    } catch (er: any) {}
    setPak(undefined);
    setIsProcessing(false);
  };

  return (
    <>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="48px" textShadow="0 5px #000000" fontFamily="VT323">
          Blockchain NFT
        </Text>
        <Text textShadow="0 5px #000000" fontFamily="VT323">
          It's 2078. Can the Nft save humans from destructive rampant NFT
          speculation? Mint NFT to find out.
        </Text>
        <Button
          disabled
          variant="primary"
          my="20px"
          bg="transparent"
          border="1px solid #fff"
          color="rgba(255,255,255, 0.7)"
        >
          1000 PKT
        </Button>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        {packages.map((pk, index) => (
          <InvestCard
            pak={pk}
            key={String(index)}
            isBuying={isProcessing && pak?.key === pk.key}
            rate={pk.token === TOKEN.BNB ? rate.bnbRate : rate.usdtRate}
            walletInfo={wallet}
            onBuy={() => handleBuyIco(pk)}
          />
        ))}
      </Flex>

      <SuccessModal
        isOpen={isOpen}
        onClose={onClose}
        hash={txHash}
        title="BUY ICO"
      />
    </>
  );
}