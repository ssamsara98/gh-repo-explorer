// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '~/redux/store';

export function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </Provider>
  );
}
