import { MoonIcon, SunIcon, ViewIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/next-js';
import { Box, Flex, Icon, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

export const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      alignItems={'center'}
      gap={'2'}
      mr={{ base: '-4', md: '0' }}
      px={'3'}
      py={'2'}
      rounded={'md'}
      fontSize={'sm'}
    >
      <Box onClick={toggleColorMode} _hover={{ cursor: 'pointer', opacity: '80%' }}>
        <Icon
          as={colorMode === 'dark' ? BsSunFill : BsMoonFill}
          fontSize={20}
          color={colorMode === 'dark' ? 'yellow' : undefined}
        />
      </Box>

      <Link
        _hover={{ cursor: 'pointer', opacity: '80%' }}
        href="https://github.com/ssamsara98/gh-repo-explorer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon as={AiOutlineGithub} fontSize={20} />
      </Link>
    </Flex>
  );
};
