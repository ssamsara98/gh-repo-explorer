import { Link } from '@chakra-ui/next-js';
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  Select,
  Spinner,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBuildingFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { useGitubProfile } from '~/hooks/user-github-profile';
import { GithubRepoResponse } from '~/types/github';

type GithubProfileProps = {
  username: string;
};

export const GithubProfile = ({ username }: GithubProfileProps) => {
  // const { theme } = useTheme();
  const { colorMode } = useColorMode();

  const {
    isLoading,
    error,
    profile,
    search,
    repos,
    filter,
    languages,
    setSearch,
    setFilter,
    refetch,
  } = useGitubProfile({ username });

  if (isLoading) {
    return (
      <Flex justifyContent={'center'} alignItems={'center'} mb={'4'}>
        <Spinner size={'lg'} />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex justifyContent={'center'} alignItems={'center'} h={'24'} flexDir={'column'} gap={'2'}>
        <Heading fontSize={'xl'} color={'red.500'} fontWeight={'extrabold'}>
          Internal Server Error
        </Heading>
        <Button onClick={refetch}>Try Again</Button>
      </Flex>
    );
  }

  return (
    <Flex flexDir={{ base: 'column', md: 'row' }} gap={'4'} mt={'2'} p={'4'}>
      <Flex flexDir={'column'} alignItems={'center'} width={{ md: '25%' }}>
        {profile && (
          <>
            <Box position={'relative'} w={'48'} h={'48'} mb={'8'}>
              <Image
                src={profile.avatar_url || ''}
                alt={profile.login + 'avatar'}
                rounded={'full'}
              />
            </Box>

            <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} mb={'4'}>
              <Link href={profile?.html_url} target="_blank" rel="noopener noreferrer">
                {profile?.name}
              </Link>
              <Link href={profile.html_url} target="_blank" rel="noopener noreferrer">
                @{profile.login}
              </Link>
            </Flex>

            <Text w={'full'} overflowWrap={'break-word'} mb={'4'}>
              {profile.bio}
            </Text>

            <Flex alignItems={'center'} fontSize={'sm'} gap={'1'} w={'full'} mb={'4'}>
              <Flex justifyContent={'center'} gap={'2'}>
                <HiUsers /> <Text>{profile.followers} followers</Text>
              </Flex>
              ·
              <Flex justifyContent={'center'} gap={'2'}>
                <Text>{profile.following} following</Text>
              </Flex>
            </Flex>

            <Flex alignItems={'center'} gap={'2'} w={'full'} mb={'2'}>
              <Icon as={BsFillBuildingFill} h={'4'} w={'4'} />
              <Text>{profile.company}</Text>
            </Flex>
            <Flex alignItems={'center'} gap={'2'} w={'full'} mb={'2'}>
              <Icon as={ImLocation2} h={'4'} w={'4'} />
              <Text>{profile.location}</Text>
            </Flex>
          </>
        )}
      </Flex>

      <Box width={{ md: '75%' }}>
        {profile && (
          <>
            <Flex alignItems={'center'} gap={'2'} fontSize={{ base: 'lg', md: 'xl' }} mb={'2'}>
              <RiGitRepositoryFill />
              <Text
                fontWeight={'semibold'}
                bg={colorMode === 'light' ? undefined : 'transparent'}
                bgClip={colorMode === 'light' ? undefined : 'text'}
                bgGradient={colorMode === 'light' ? undefined : 'linear(to-r, teal.300, blue.500)'}
              >
                Repositories {`(${profile.public_repos || 0})`}
              </Text>
            </Flex>

            <Box display={{ md: 'flex' }} mb={'2'} gap={'2'}>
              <Box
                bgGradient="linear(to-r, teal.300, blue.500)"
                rounded={'md'}
                p="2px"
                mb={{ base: '2', md: '0' }}
                w={{ md: '80%' }}
              >
                <Input
                  bg={colorMode === 'light' ? 'white' : 'gray.800'}
                  border={'none'}
                  placeholder="Find a repository..."
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </Box>
              <Box
                bgGradient="linear(to-r, teal.300, blue.500)"
                rounded={'md'}
                p="2px"
                w={{ md: '20%' }}
              >
                <Select
                  bg={colorMode === 'light' ? 'white' : 'gray.800'}
                  border={'none'}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFilter(value === 'All' ? '' : e.target.value);
                  }}
                  value={filter}
                >
                  <option value="" disabled>
                    Language
                  </option>
                  {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                      {lang.label}
                    </option>
                  ))}
                </Select>
              </Box>
            </Box>

            {repos && repos?.length > 0 ? (
              repos.map((repo, index) => <RepoItem key={repo.id} repo={repo} index={index} />)
            ) : (
              <Text fontSize={'sm'} color={'gray.400'} textAlign={'center'} mt={'4'}>
                Nothing Here...
              </Text>
            )}
          </>
        )}
      </Box>
    </Flex>
  );
};

type RepoItemsProps = {
  repo: GithubRepoResponse['data'][0];
  index: number;
};

const RepoItem = (props: RepoItemsProps) => {
  const { repo, index: _ } = props;
  // const { theme } = useTheme();
  const { colorMode } = useColorMode();

  return (
    <>
      <Divider />
      <Box
        key={repo.id}
        display={{ md: 'flex' }}
        justifyContent={{ md: 'space-between' }}
        p={'2'}
        minH={'6rem'}
      >
        <Box w={{ md: '80%' }}>
          <Link
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            fontWeight={'semibold'}
            bg={colorMode === 'light' ? undefined : 'transparent'}
            fontSize={{ base: 'sm', md: 'md' }}
            mb={'2'}
            color={'blue.600'}
            bgClip={colorMode === 'light' ? undefined : 'text'}
            bgGradient={colorMode === 'light' ? undefined : 'linear(to-r, teal.300, teal.400)'}
          >
            {repo.full_name}
          </Link>
          <Text fontSize={{ base: 'xs', md: 'sm' }} mt={'2'}>
            {repo.description}
          </Text>
          {repo.language && (
            <Box
              as={'span'}
              fontSize={'xs'}
              border={'1px'}
              bg={colorMode === 'light' ? undefined : 'gray.700'}
              p={'1'}
              rounded={'md'}
            >
              {repo.language}
            </Box>
          )}
        </Box>

        <Flex alignItems={'start'} w={{ md: '20%' }}>
          <Flex
            alignItems={'center'}
            mt={{ base: '2', md: '0' }}
            justifyContent={{ md: 'end' }}
            w={'full'}
            gap={'1'}
            color={colorMode === 'light' ? undefined : 'yellow.300'}
            fontSize={{ base: 'xs', md: 'sm' }}
          >
            <Icon as={AiFillStar} />
            <Text>{repo.stargazers_count} star</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
