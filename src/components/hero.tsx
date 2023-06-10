'use client';

import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/layout';
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
    <Grid templateColumns={'repeat(2,minmax(0,1fr))'} gap={'4'}>
      <GridItem py={{ md: '48' }}>
        <Heading
          bgGradient="linear(to-l, blue.400, teal.400)"
          bgClip="text"
          fontSize={'6xl'}
          fontWeight="extrabold"
        >
          Search Github Username
        </Heading>

        <Box mt={'4'} />

        <Box bgGradient="linear(to-l, blue.400, teal.400)" rounded={'md'} p="2px">
          <Input
            bg={'gray.900'}
            onKeyDown={onPressEnter}
            placeholder="e.g: crush"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </Box>

        {error && <p className="mt-2 text-red-500 capitalize text-sm font-semibold">{error}</p>}

        <Button
          colorScheme={'blue'}
          mt={'4'}
          w={'fit-content'}
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
        {isLoading && <p>Searching...</p>}
      </GridItem>
    </Grid>
  );
};

export default Hero;
