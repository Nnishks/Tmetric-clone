import React from "react";
import { Box, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

export default function VideoComponent({ props }: any) {
  const { isOpen, onToggle } = props;

  return (
    <>
      <Box left="-5rem" position="absolute">
        <Modal isCentered isOpen={isOpen} onClose={onToggle}>
          {
            <ModalOverlay
              bg="none"
              backdropFilter="auto"
              backdropInvert="80%"
              backdropBlur="2px"
            />
          }
          <ModalContent>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/d2LwNiALPIM"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}
