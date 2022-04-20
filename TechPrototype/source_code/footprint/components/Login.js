import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";

const LoginForm = () => {
  return <Center w="100%" margin="auto">
      <Box safeArea p="2" py="8" w="90%">
        <Heading size="lg" fontWeight="600" color="cyan.400" _dark={{
        color: "warmGray.50"
      }}>
          欢迎来到足迹！
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          登录之后和我们继续探索吧！
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>邮箱账号</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>密码</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "cyan.500"
          }} alignSelf="flex-end" mt="1">
              忘记密码？
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="cyan">
            登录
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              我没有账号{" "}
            </Text>
            <Link _text={{
            color: "cyan.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              注册
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};


export default () => {
    return (
        <Center flex={1} px="3">
            <LoginForm />
        </Center>
    );
};
    