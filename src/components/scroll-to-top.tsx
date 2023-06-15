import { Button, Icon, useColorMode } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  // const { theme } = useTheme();
  const { colorMode } = useColorMode();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const callback = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', callback);

    return () => {
      window.removeEventListener('scroll', callback);
    };
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      position={'fixed'}
      bottom={'6'}
      right={'6'}
      fontSize={'3xl'}
      zIndex={'10'}
      cursor={'pointer'}
      color={'teal.300'}
      rounded={'full'}
      px={'0'}
      border={'none'}
      bg={colorMode === 'light' ? 'white':'gray.800'}
      display={isVisible ? 'block' : 'none'}
      onClick={goTop}
    >
      <Icon as={FaArrowCircleUp} />
    </Button>
  );
};
