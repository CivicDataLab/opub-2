import type { NextPage } from 'next';
import { Button, Flex } from '@opub-cdl/design-system';

const Home: NextPage = () => {
  return (
    <main>
      <Flex css={{ width: '100%', height: '80vh', ai: 'center', jc: 'center', gap: '$2' }}>
        <Button variant={'primary'}>Button</Button>
        <Button variant={'primary'} size="compact">
          Button
        </Button>
      </Flex>
    </main>
  );
};

export default Home;
