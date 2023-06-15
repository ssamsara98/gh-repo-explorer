// app/providers.tsx
'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript, ThemeConfig, extendTheme } from '@chakra-ui/react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '~/redux/store';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  disableTransitionOnChange: true,
};
const theme = extendTheme({ config });

export function Providers({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      {/* <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange> */}
      <CacheProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
      {/* </ThemeProvider> */}
    </Provider>
  );
}
