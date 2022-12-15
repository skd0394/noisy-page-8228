import React from "react"
import { useDisclosure, usePopper, useOutsideClick, useMergeRefs, Box } from "@chakra-ui/react"
import './nav.css'

export default function PopOver({ ref, ...props }) {
    const outsideRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { popperRef, referenceRef } = usePopper()
    const { name, description } = props
    useOutsideClick({
        ref: outsideRef,
        handler: () => isOpen && onClose(),
    })

    const buttonEl = useMergeRefs(outsideRef, referenceRef)

    return (
        <>
            <button ref={buttonEl} onMouseEnter={onOpen}>
                <p id="Women">{name}</p>
            </button>
            {isOpen && (
                <Box onMouseLeave={onClose} position={'relative'} top={'40px'} ref={popperRef} bg='whiteAlpha.50' color={'black'} fontWeight={"medium"} height="211px" width="1300px" backgroundColor={'white'} zIndex={'1'} border="1px solid black">
                    {description}
                </Box>
            )}
        </>
    )
}