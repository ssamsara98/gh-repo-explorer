'use client';

import { Box, Button, Grid, GridItem, Heading, Input, Text, useColorMode } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import { KeyboardEvent, useState } from 'react';
import heroLottieFile from '~/assets/lottie/hero.json';
import loadingLottieFile from '~/assets/lottie/loading.json';
import notFoundLottieFile from '~/assets/lottie/not-found.json';
import { setCurrentGithubUsernames } from '~/redux/github/github.slice';
import { useAppDispatch } from '~/redux/store';
import { useGetGithubUsersMutation } from '~/services/github';
import { toErrorWithMessage } from '~/utils/error-handling';

const Hero = () => {
  const dispatch = useAppDispatch();
  const { colorMode } = useColorMode();

  const [searchGithubUsers, { isLoading }] = useGetGithubUsersMutation();

  const [error, setError] = useState<string | undefined>(undefined);
  const [isNotFound, setIsNotFound] = useState(false);
  const [input, setInput] = useState('');

  const handleSubmit = async () => {
    try {
      setIsNotFound(false);
      setError(undefined);

      const res = await searchGithubUsers({
        username: input,
      }).unwrap();

      dispatch(setCurrentGithubUsernames(res.data.items));

      if (res.data.items.length === 0) {
        setIsNotFound(true);
      }
    } catch (error) {
      toErrorWithMessage(error, setError);
    }
  };

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Grid
      templateColumns={{ base: 'repeat(1,minmax(0,1fr))', md: 'repeat(2,minmax(0,1fr))' }}
      gap={'4'}
    >
      <GridItem py={{ md: '48' }}>
        <Heading
          textAlign={{ base: 'center', md: 'left' }}
          fontWeight="extrabold"
          fontSize={{ base: '4xl', md: '6xl' }}
          color={'transparent'}
          bgGradient="linear(to-l, blue.400, teal.400)"
          bgClip="text"
          mb={'4'}
        >
          Search Github Username
        </Heading>

        <Box bgGradient="linear(to-l, blue.400, teal.400)" rounded={'xl'} p="1">
          <Input
            bg={colorMode === 'dark' ? 'gray.900' : 'white'}
            border={'none'}
            onKeyDown={onPressEnter}
            placeholder="e.g: crush"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </Box>

        {error && (
          <Text mt={'2'} color={'red.500'} fontSize={'sm'} fontWeight={'semibold'}>
            {error}
          </Text>
        )}

        <Button
          colorScheme={'blue'}
          mt={'4'}
          w={{ base: 'full', md: 'fit-content' }}
          disabled={isLoading}
          onClick={handleSubmit}
        >
          Search User
        </Button>
      </GridItem>
      <GridItem
        position={'relative'}
        maxW={'full'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Lottie
          animationData={
            isLoading ? loadingLottieFile : isNotFound ? notFoundLottieFile : heroLottieFile
          }
        />
        {isLoading && <Text>Searching...</Text>}
      </GridItem>
    </Grid>
  );
};

export default Hero;
