import React from "react";
import { Box, Divider, BoxProps } from "@chakra-ui/react";

export enum DeviceStatus {
  Imac,
  ipad,
  watch,
}
interface DeviceIconProps {
  status: DeviceStatus;
}

const deviceScreenStyles: BoxProps[] = [
  {
    w: "161px",
    h: "90px",
    border: "5px solid black",
    borderRadius: "10px 10px 0px 0px",
    borderBottomWidth: "10px",
    bgColor: "white",
    boxSizing: "border-box",
    position: "relative",
  },
  {
    w: "116px",
    h: "167px",
    border: "5px solid black",
    borderRadius: "10px",
    bgColor: "white",
    boxSizing: "border-box",
    position: "relative",
  },
  {
    w: "59px",
    h: "75px",
    border: "5px solid black",
    bgColor: "white",
    boxSizing: "border-box",
    borderRadius: "10px",
    position: "relative",
  },
];

export const DeviceIcon = (props: DeviceIconProps) => {
  return (
    <Box>
      <Box
        w="29px"
        h={props.status === DeviceStatus.watch ? "25px" : "0px"}
        borderRadius="10px 10px 0px 0px"
        margin="auto"
        d="block"
        bgColor="black"
        transition=".3s"
        transitionDelay={props.status === DeviceStatus.watch ? ".3s" : "0s"}
      />
      <Box
        {...deviceScreenStyles[props.status]}
        transition=".5s"
        overflow="hidden"
      >
        <Divider
          d="block"
          position="absolute"
          borderBottom="3px solid black"
          background="transparent"
          boxSizing="border-box"
          w="41px"
          visibility={props.status === DeviceStatus.ipad ? "visible" : "hidden"}
          opacity={props.status === DeviceStatus.ipad ? "1" : "0"}
          mb={props.status === DeviceStatus.ipad ? "0px" : "-20"}
          bottom="10px"
          transition=".3s"
          transitionDelay={props.status === DeviceStatus.ipad ? ".4s" : "0s"}
          left="calc(50% - 21px)"
        />
      </Box>
      {/* imac base */}
      <Box
        w="100%"
        h={props.status === DeviceStatus.Imac ? "21px" : "0px"}
        bgColor="#D4D1D3"
        borderRadius="0px 0px 4px 4px"
        transition=".3s"
      />
      <Box
        w="50px"
        h={props.status === DeviceStatus.Imac ? "25px" : "0px"}
        m="auto"
        bgColor="#ACA9B1"
        transition=".3s"
      />
      <Box
        w="50px"
        h={props.status === DeviceStatus.Imac ? "5px" : "0px"}
        m="auto"
        bgColor="white"
        borderRadius="0px 0px 4px 4px"
        transition=".3s"
        transitionDelay=".3s"
      />
      <Box
        w="29px"
        h={props.status === DeviceStatus.watch ? "25px" : "0px"}
        borderRadius="0px 0px 10px 10px"
        margin="auto"
        bgColor="black"
        transition=".3s"
        transitionDelay={props.status === DeviceStatus.watch ? ".3s" : "0s"}
      />
    </Box>
  );
};
