import { CharacterCard } from '../../components/CharactersCard/CharacterCard';
import { Box, Container, Flex } from '@radix-ui/themes';

const Characters = async () => {
  const response = await fetch('http://localhost:3000/api/characters');

  const {
    data: { characters },
  } = await response.json();

  return (
    <Box>
      <Container size="3">
        <Flex wrap="wrap" gap="5">
          {characters.map((char: Character) => {
            const { name } = char;
            const { images: imageSrc } = char;

            return (
              <CharacterCard
                imageSrc={imageSrc[0]}
                name={name}
                key={char.id}
                id={char.id}
              />
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default Characters;
