import type { NextPage } from 'next';
import { Flex } from '@opub-cdl/design-system';
import ThemeChanger from '@modules/theme';

const Home: NextPage = () => {
  return (
    <main>
      <Flex css={{ width: '100%', height: '80vh', ai: 'center', jc: 'center', gap: '$2' }}>
        <ThemeChanger />
      </Flex>
    </main>
  );
};

export default Home;
