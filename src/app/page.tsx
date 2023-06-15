'use client';

import { Box, Container } from '@chakra-ui/react';
import Hero from '~/components/hero';
import { Result } from '~/components/result';
import { ScrollToTop } from '~/components/scroll-to-top';

export default function Home() {
  return (
    <Box as="main" py={'20'}>
      <Container maxW={'container.xl'} px={'8'}>
        <Hero />
        <Result />
        <ScrollToTop />
      </Container>
    </Box>
  );
}
