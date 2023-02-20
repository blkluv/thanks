import {
  Box,
  Button,
  chakra,
  Container,
  Highlight,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import { ReactNode } from "react"
import Link from "next/link"

const SocialButton = ({
  children,
  label,
  href,

}: {
  children: ReactNode
  label: string
  href: string

}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.700")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>
            © 2023 Thanks For Yourself -
                <Text
                    as="span"
                    fontStyle="italic"
                    textDecoration="underline">
                        <Button
                            as="a"
                            py={1}
                            px={2}
                            transition={"all 1s"}
                            _hover={{ bg: "blue.400", color: "white" }}
                            href="https://youtu.be/coPqAHe_oac">
                                Tutorial from the Hosna Qasmei Channel.
                        </Button>
                </Text>
        </Text>


        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Instagram"} href={"https://www.instagram.com/rzkjanuar/"}>
            <FaInstagram />
          </SocialButton>
          <SocialButton 
            label={"YouTube"}
            href={"https://www.linkedin.com/in/rzkjanuarr/"}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
