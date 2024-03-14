import { Box, Flex } from "@chakra-ui/react"
import { Link, Link as RouterLink } from "react-router-dom"
import { InstagramMobileLogo, } from "../../assets/constants"

const Sidebar = () => {
  return ( <Box
      height={"100vh"}
      borderRight={"2px solid"}
      borderColor={"whiteAlpha.600"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{base:2, md:4}}
    >
    
    <Flex direction={"column"} gap={10} w="full" height={"full"}>
      <Link to={"/"} as={RouterLink}  display={{base:"none", md:"block"}} cursor="pointer">
        <img src="/logo.png" className="mx-auto w-20 items-center justify-center"/>
      </Link>
      <Link to={"/"} as={RouterLink} p={2} display={{base:"block", md:"none"}}
        _hover={{
          bg:"whiteAlpha.600"
        }}
        w={10}
        cursor="pointer">
        <InstagramMobileLogo/>
      </Link>
    </Flex>

    </Box>
  )
}

export default Sidebar