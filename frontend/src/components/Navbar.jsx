import { PlusSquareIcon } from "@chakra-ui/icons";
import { Container, Flex, HStack, Text, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Container maxW={"1140px"} px={4} >
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDirection={{base: "column", sm: "row"}}
            >
                <Text
                    fontSize={{ base: "22px", sm: "28px" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={'text'}
                >
                    <Link to={'/'}>Yum Yum Foods 😋</Link>
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Button as={Link} to='/create'>
                        <PlusSquareIcon fontSize={"20px"} />
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar;