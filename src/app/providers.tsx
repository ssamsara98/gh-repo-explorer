// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import {
  ChakraProvider,
  ColorModeScript,
  ThemeConfig,
  extendTheme,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '~/redux/store';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};
const theme = extendTheme({ config });

export function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <CacheProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </Provider>
  );
}
