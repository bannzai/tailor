import { Box, Container, Image, Stack, useDimensions } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const elementRef = useRef(null);
  const dimensions = useDimensions(elementRef, true);

  useEffect(() => {
    console.log(dimensions);
  }, [dimensions]);

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
          ref={elementRef}
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
