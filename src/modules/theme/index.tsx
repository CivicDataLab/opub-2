import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@opub-cdl/design-system';

const ThemeChanger = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      size={'compact'}
      variant="primary"
      onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </Button>
  );
};

export default ThemeChanger;
