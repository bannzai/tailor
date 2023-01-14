import {
  Box,
  Container,
  Image,
  Img,
  Stack,
  useMergeRefs,
} from "@chakra-ui/react";

import { useEffect, useRef, useState } from "react";
import { useDrag } from "react-dnd";

export default function Home() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);
  const boxResizeRef = useRef(null);
  const [{ opacity, isDragging }, dragRef] = useDrag(
    () => ({
      type: "box",
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );
  const mergedRefs = useMergeRefs(boxResizeRef, dragRef);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      }
    });
    if (boxResizeRef.current != null) {
      resizeObserver.observe(boxResizeRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [boxResizeRef]);

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
      <Image
        src="https://avatars.githubusercontent.com/u/10897361?v=4"
        alt="bannzai"
      />

      <Box
        ref={mergedRefs}
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
        backgroundImage={"https://avatars.githubusercontent.com/u/10897361?v=4"}
        backgroundSize={width + height}
        bgRepeat={"no-repeat"}
      />
    </Container>
  );
}
