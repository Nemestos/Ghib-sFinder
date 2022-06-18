import { ReactElement } from 'react';
import { Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export function ToggleTheme() : ReactElement {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
