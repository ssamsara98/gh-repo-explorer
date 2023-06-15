'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Divider, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  const { colorMode } = useColorMode();
  // const { theme } = useTheme();
  const dateNow = new Date();

  return (
    <Box
      as="footer"
      position={'relative'}
      bg={colorMode === 'light' ? 'white' : 'black'}
      textColor={colorMode === 'light' ? undefined : 'white'}
      shadow={'md'}
      mt={'-20'}
    >
      <Divider my={'8'} />
      <Box
        display={'block'}
        textAlign={'center'}
        fontSize={'sm'}
        textColor={colorMode === 'light' ? 'gray.500' : 'gray.400'}
        pb={'8'}
      >
        <Text>©{dateNow.getUTCFullYear()} Sulthon Abdul Malik. All Rights Reserved.</Text>

        <Link
          href="https://github.com/ssamsara98/gh-repo-explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`(Open Source on Github)`}
        </Link>
      </Box>
    </Box>
  );
};
