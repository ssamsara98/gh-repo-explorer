import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GithubProfile } from './github-profile';
import { selectCurrentGithubUser } from '~/redux/github/github.slice';
import { useAppSelector } from '~/redux/store';

export const Result = () => {
  // const { theme } = useTheme();
  const { colorMode } = useColorMode();

  const currentGithubUser = useAppSelector((state) => selectCurrentGithubUser(state));

  return currentGithubUser.length > 0 ? (
    <>
      <Heading
        textAlign={{ base: 'center', md: 'left' }}
        fontWeight={'extrabold'}
        color={'transparent'}
        fontSize={{ base: 'xl', md: '2xl' }}
        bgGradient={'linear(to-r, teal.300, blue.500)'}
        bgClip={'text'}
      >
        Results:
      </Heading>

      <Accordion allowMultiple>
        {currentGithubUser.map((user) => {
          return (
            <AccordionItem
              key={user.id}
              bgGradient={'linear(to-r, teal.300, blue.500)'}
              p={'0.5'}
              rounded={'md'}
              my={'2'}
            >
              <Box bg={colorMode === 'light' ? 'white' : 'gray.800'} rounded={'md'}>
                <AccordionButton>
                  <Flex as="span" flex="1" textAlign="left" gap={'2'}>
                    <Icon as={AiFillGithub} w={6} h={6} />
                    <Text>{user.login}</Text>
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <GithubProfile username={user.login} />
                </AccordionPanel>
              </Box>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  ) : (
    <></>
  );
};
