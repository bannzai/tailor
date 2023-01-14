import {
  Box,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  useDimensions,
} from "@chakra-ui/react";

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

  return (
    <Box ref={boxRef} resize={"both"} overflow={"auto"} bg="pink.400">
      Box is {width}px wide and {height}px tall
    </Box>
  );
}
