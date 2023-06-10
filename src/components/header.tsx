'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Container } from '@chakra-ui/react';
import React from 'react';

export const Header = () => {
  return (
    <Box
      as="header"
      // className="fixed left-0 right-0 top-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:bg-black/80 dark:saturate-100"
      position={'fixed'}
      left={'0'}
      right={'0'}
      top={'0'}
      zIndex={'40'}
      shadow={'sm'}
    >
      <Container
        // className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-8"
        maxW={'container.xl'}
        display={'flex'}
        h={'60px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={'8'}
      >
        <Link
          href="/"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          aria-label="Homepage"
        >
          GitHub Repositories Explorer
        </Link>
      </Container>
    </Box>
  );
};
