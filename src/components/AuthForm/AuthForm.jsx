import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); 
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confrimPassword: "",
  });

  const handleAuth = () => {
    if ( !inputs.email || !inputs.password ) {
      alert("Please Fill All Fields")
      return;
    }

    navigate('/');
  };

  return (
    <>
      <Box
        border={"2px solid gray"}
        borderRadius={4}
        padding={3}
        className="bg-slate-900"
      >
        <VStack>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              value={inputs.confrimPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confrimPassword: e.target.value })
              }
            />
          ) : null}

          <Button
            width={"full"}
            colorScheme="gray"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </Button>

          {/*  */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"2px"} bg={"gray.400"} />
            <Text mx={1} color={""}>
              OR
            </Text>
            <Box flex={2} h={"2px"} bg={"gray.400"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" w={5} alt="google logo" />
            <Text mx="2" className="text-green-500 font-semibold">
              Log In With Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"2px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Dont Have An Account?" : "Already Have An Account"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.400"}
            className="font-medium cursor-pointer"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
