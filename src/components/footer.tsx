'use client';

import { Link } from '@chakra-ui/next-js';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
  const dateNow = new Date();

  return (
    <Box as="footer">
      <Box display={'block'} textAlign={'center'} fontSize={'sm'} textColor={'gray.500'} pb={'8'}>
        <Text color={'gray.100'}>
          @{dateNow.getUTCFullYear()} Sulthon Abdul Malik. All Right Reserved.
        </Text>
        <Link
          href="https://github.com/crusherblack/github-repositories-explorer"
          target="_blank"
          rel="noopener noreferrer"
          textColor={'gray.300'}
        >{`(Open Source on Github)`}</Link>
      </Box>
    </Box>
  );
};
