import * as React from "react";
import {Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider} from "native-base";
import {PageSelectProvider} from "../utils/SwitchPage";

const RegisterForm = () => {
    return <PageSelectProvider>
        {({Page, SelectPage}) => (<Center w="100%" margin="auto">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" color="cyan.400" _dark={{
                    color: "warmGray.50"
                }} fontWeight="semibold">
                    欢迎来到足迹
                </Heading>
                <Heading mt="1" color="coolGray.600" _dark={{
                    color: "warmGray.200"
                }} fontWeight="medium" size="xs">
                    注册之后和我们一起探索吧！
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>邮箱</FormControl.Label>
                        <Input/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>密码</FormControl.Label>
                        <Input type="password"/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>确认密码</FormControl.Label>
                        <Input type="password"/>
                    </FormControl>
                    <Button mt="2" colorScheme="primary" onPressIn={()=>SelectPage('home')}>
                        注册
                    </Button>
                </VStack>
            </Box>
        </Center>)}
    </PageSelectProvider>;
};

export default RegisterForm;
