import React, { useMemo, useState } from "react";
import {
  Flex,
  Center,
  keyframes,
  usePrefersReducedMotion,
  useBoolean,
} from "@chakra-ui/react";
import { DeviceIcon, DeviceStatus } from "./DeviceIcon";

interface DeviceCardSelectorProps {
  status: DeviceStatus;
}
const bounce = keyframes`
  0%  { transform: scale(1) translate(0px, 0px); }
  30%  { transform: scale(0.98) translate(0px, 1px); }
  70% { transform:  scale(1.01) translate(0px, -5px);}
  100%  { transform: scale(1) translate(0px, 0px); }
`;

export const DeviceCardSelector = (props: DeviceCardSelectorProps) => {
  const [status, setNewStatus] = useState(props.status);
  const [clicked, setClicked] = useBoolean(false);
  const preferMotion = usePrefersReducedMotion();
  const bgColors = useMemo(() => ["#97B9FE", "#FDAC99", "#FCEC96"], []);
  const bgColorsContainer = useMemo(
    () => ["#DCE6FF", "#FCDED7", "#F7EFD4"],
    []
  );
  const animation = preferMotion ? undefined : `${bounce} .4s ease-in-out`;

  return (
    <Center
      w="100%"
      h="100vh"
      boxSizing="border-box"
      bgColor={bgColorsContainer[status]}
      transition=".1s"
    >
      <Flex
        h="260px"
        w="647px"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.25)"
        borderRadius="4px"
        animation={clicked ? animation : undefined}
        bgColor="white"
        onClick={() => {
          setClicked.on();
          setNewStatus(
            status === DeviceStatus.Imac
              ? DeviceStatus.ipad
              : status === DeviceStatus.ipad
              ? DeviceStatus.watch
              : DeviceStatus.Imac
          );
          setTimeout(() => {
            setClicked.off();
          }, 500);
        }}
      >
        <Center
          w="260px"
          h="260px"
          borderRadius="4px"
          bgColor={bgColors[status]}
          transition=".3s"
        >
          <DeviceIcon status={status} />
        </Center>
        <Center w="calc(100% - 260px)" h="260px">
          Click to change device
        </Center>
      </Flex>
    </Center>
  );
};
