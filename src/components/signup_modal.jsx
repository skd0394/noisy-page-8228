import { Input, InputGroup, InputLeftElement, Container, Box, useDisclosure, ModalOverlay, Button, Modal, Text, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, } from "@chakra-ui/react"
import React from "react"
import { PhoneIcon } from "@chakra-ui/icons"
export default function SignUp() {


    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            <Button
                onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}
                fontSize={'x-small'}
                fontWeight={"500"}
                backgroundColor="whiteAlpha.100"
            >
                Sign Up/Sign In
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size={'2xl'}>
                {overlay}
                <ModalContent>
                    <Container maxW='2xl' bg='white' paddingLeft="40px" paddingRight={'40px'} >
                        <Box padding='4' bg='white' color='black' maxW='md'>
                            <ModalHeader fontSize={'xx-large'} >Sign Up/Sign in</ModalHeader>
                            <Text fontSize={'xx-small'} >Enjoy the convenience of a single account across all participating brands</Text>
                        
                        <Text fontSize={'x-small'} fontWeight={'500'}>Mobile Number</Text>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<PhoneIcon color='gray.300' />}
                            />
                            <Input type='number' placeholder='Phone number' />
                        </InputGroup>
                        <Text>By creating your account you agree to our <Text color="orange">Terms and Conditions</Text> </Text>
                        </Box>
                        <ModalCloseButton />
                        <ModalBody>

                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose} color='white' backgroundColor={'orange'}>CONTINUE</Button>
                        </ModalFooter>
                    </Container>
                </ModalContent>

            </Modal>
        </>
    )
}



