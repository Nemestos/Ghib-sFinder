import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import theme from './theme';
import App from './App';
import { queryClient } from './utils/clients';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>,
);
