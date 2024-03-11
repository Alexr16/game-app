import { Platform } from "../hooks/usePlatforms";
import { Icon, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation5: FaPlaystation,
    "xbox-series-x": FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            as={platformIcons[platform.slug]}
            key={platform.id}
            color="gray.500"
          />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
