import { showSortAddress } from "@/utils";
import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function HomeMain() {
  const [show, setShow] = useState();
  const [valueCopy, setValueCopy] = useState();

  const Toast = useToast();
  const handleCopy = () => {
    Toast({
      status: "success",
      description: "Copy success",
      position: "bottom-left",
    });
  };

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Text fontSize="48px" textShadow="0 5px #000000" fontFamily="VT323">
        Blockchain NFT
      </Text>
      <Text textShadow="0 5px #000000" fontFamily="VT323">
        It's 2078. Can the Nft save humans from destructive rampant NFT
        speculation? Mint NFT to find out.
      </Text>

      <Button
        variant="primary"
        my="5px"
        border="1px solid #fff"
        color="rgba(255,255,255, 0.7)"
        onClick={() => setShow(!show)}
      >
        Contract
      </Button>

      {show && (
        <>
          <CopyToClipboard text={"0x83c3d3ef65f453aec2891522941380a7d1430244"}>
            <Button
              variant="primary"
              my="5px"
              bg="transparent"
              border="1px solid #fff"
              color="rgba(255,255,255, 0.7)"
              w="200px"
              onClick={handleCopy}
            >
              <div>
                <i className="ni ni-active-40" />
                <span>
                  {" "}
                  {showSortAddress(
                    "0x83c3d3ef65f453aec2891522941380a7d1430244"
                  )}{" "}
                  Token
                </span>
              </div>
            </Button>
          </CopyToClipboard>

          <CopyToClipboard text={"0x61734A8dc649a7485aF7016cbEBD6DDBd03256e5"}>
            <Button
              variant="primary"
              my="5px"
              bg="transparent"
              border="1px solid #fff"
              color="rgba(255,255,255, 0.7)"
              w="200px"
              onClick={handleCopy}
            >
              <div>
                <i className="ni ni-active-40" />
                <span>
                  {" "}
                  {showSortAddress(
                    "0x61734A8dc649a7485aF7016cbEBD6DDBd03256e5"
                  )}{" "}
                  ICO
                </span>
              </div>
            </Button>
          </CopyToClipboard>

          <CopyToClipboard text={"0xaB343c01BB5695feD7dd78E5E0cE6190EBc16C19"}>
            <Button
              variant="primary"
              my="5px"
              bg="transparent"
              border="1px solid #fff"
              color="rgba(255,255,255, 0.7)"
              w="200px"
              onClick={handleCopy}
            >
              <div>
                <i className="ni ni-active-40" />
                <span>
                  {" "}
                  {showSortAddress(
                    "0xaB343c01BB5695feD7dd78E5E0cE6190EBc16C19"
                  )}{" "}
                  NFT
                </span>
              </div>
            </Button>
          </CopyToClipboard>

          <CopyToClipboard text={"0xE3397e6c997DA58A47abB7bDB76Fe2812723Ac4f"}>
            <Button
              variant="primary"
              my="5px"
              bg="transparent"
              border="1px solid #fff"
              color="rgba(255,255,255, 0.7)"
              w="200px"
              onClick={handleCopy}
            >
              <div>
                <i className="ni ni-active-40" />
                <span>
                  {" "}
                  {showSortAddress(
                    "0xE3397e6c997DA58A47abB7bDB76Fe2812723Ac4f"
                  )}{" "}
                  Market
                </span>
              </div>
            </Button>
          </CopyToClipboard>

          <CopyToClipboard text={"0x81bD66EBA9f45D0f8D5B28dD991704c4763A443a"}>
            <Button
              variant="primary"
              my="5px"
              bg="transparent"
              border="1px solid #fff"
              color="rgba(255,255,255, 0.7)"
              w="200px"
              onClick={handleCopy}
            >
              <div>
                <i className="ni ni-active-40" />
                <span>
                  {" "}
                  {showSortAddress(
                    "0x81bD66EBA9f45D0f8D5B28dD991704c4763A443a"
                  )}{" "}
                  Auction
                </span>
              </div>
            </Button>
          </CopyToClipboard>
        </>
      )}
    </Flex>
  );
}
