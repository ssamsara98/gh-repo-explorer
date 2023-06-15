'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Container, Flex, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { ThemeSwitcher } from './theme-switcher';

export const Header = () => {
  // const { theme } = useTheme();
  const { colorMode } = useColorMode();
  return (
    <Box
      as="header"
      position={'fixed'}
      left={'0'}
      right={'0'}
      top={'0'}
      bg={colorMode === 'light' ? 'white' : 'black'}
      opacity={'80%'}
      zIndex={'40'}
      shadow={'sm'}
      backdropFilter={'auto'}
      backdropBlur={'10px'}
      saturate={colorMode === 'light' ? '1.8' : '1'}
    >
      <Container
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
          gap={'1'}
          aria-label="Homepage"
        >
          GitHub Repositories Explorer
        </Link>

        <Flex alignItems={'center'} gap={'2'}>
          <ThemeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};
