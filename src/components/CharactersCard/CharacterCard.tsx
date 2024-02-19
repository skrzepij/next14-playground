'use client';

import { Card, Inset, Heading } from '@radix-ui/themes';
import Image from 'next/image';
import styles from './CharacterCard.module.scss';
import Link from 'next/link';

type CharacterCardProps = {
  imageSrc: string;
  name: string;
  id: string;
};

export const CharacterCard = ({ imageSrc, name, id }: CharacterCardProps) => {
  return (
    <Link href={`/characters/${id}`}>
      <Card size="2" className={styles.card}>
        <Inset
          clip="border-box"
          side="top"
          pb="current"
          className={styles.inset}
        >
          <Image
            alt="naruto character"
            src={imageSrc}
            quality={100}
            fill
            sizes="(max-width:200px)"
            className={styles.image}
          />
        </Inset>
        <Heading as="h2">{name}</Heading>
      </Card>
    </Link>
  );
};
