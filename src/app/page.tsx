'use client';

import { Box, Container, useColorMode } from '@chakra-ui/react';
import Hero from '~/components/hero';

export default function Home() {
  return (
    <Box as="main" >
      <Container maxW={'container.xl'} px={'8'}>
        <Hero />
      </Container>
    </Box>
  );
}
