'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Divider, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  const { colorMode } = useColorMode();
  const dateNow = new Date();

  return (
    <Box
      as="footer"
      position={'relative'}
      bg={colorMode === 'dark' ? 'black' : 'white'}
      textColor={colorMode === 'dark' ? 'white' : undefined}
      shadow={'md'}
      // mt={'-36'}
    >
      <Divider my={'8'} />
      <Box
        display={'block'}
        textAlign={'center'}
        fontSize={'sm'}
        textColor={colorMode === 'dark' ? 'gray.400' : 'gray.500'}
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
