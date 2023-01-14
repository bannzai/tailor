import { Box, Container, Image, Stack } from "@chakra-ui/react";
import { useDragControls } from "framer-motion";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      }
    });
    if (boxRef.current != null) {
      resizeObserver.observe(boxRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [boxRef]);

  useEffect(() => {
    console.log({ width, height });
  }, [width, height]);

  return (
    <Container
      maxW="xl"
      bg="blue.400"
      centerContent
      borderRadius="lg"
      overflow="hidden"
    >
      <Stack padding="4" background={"white"} color="black" maxW="md">
        <Image
          src="https://avatars.githubusercontent.com/u/10897361?v=4"
          alt="bannzai"
        />

        <Box
          ref={boxRef}
          resize="both"
          width="100px"
          height="100px"
          borderWidth="1px"
          borderRadius="lg"
          overflow="auto"
          borderColor="pink.400"
          position={"absolute"}
          left={"50%"}
          top={"50%"}
        />
      </Stack>
    </Container>
  );
}
