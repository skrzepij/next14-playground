'use client';

import { Card, Inset, Flex, Heading, Text } from '@radix-ui/themes';

type CharacterCardProps = {
  imageSrc: string;
  name: string;
};

export const CharacterCard = ({ imageSrc, name }: CharacterCardProps) => {
  return (
    <Card size="2" style={{ maxWidth: 200 }}>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={imageSrc}
          alt="Bold typography"
          style={{
            display: 'block',
            objectFit: 'fill',
            width: '100%',
            height: 140,
            backgroundColor: 'var(--gray-5)',
          }}
        />
      </Inset>
      <Flex direction="column">
        <Heading as="h2">{name}</Heading>
        <Text as="p">Lorem ipsum</Text>
      </Flex>
    </Card>
  );
};
