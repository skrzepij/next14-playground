import { CharacterCard } from '../../components/CharactersGallery/CharactersCard';
import { Box, Container, Flex } from '@radix-ui/themes';

const Characters = async () => {
  const response = await fetch('https://narutodb.xyz/api/character');
  const { characters } = await response.json();

  return (
    <Box>
      <Container size="3">
        <Flex wrap="wrap" gap="5">
          {characters.map((char: Character) => {
            const { name } = char;
            const { images: imageSrc } = char;

            // imageSrc[0] --> i know, it hurts me as well, but i dunno how to nicely destruct this shit cause its an array with couple of img urls where the first one seems to be valid, but i will prepare some exception like if there's no any pic some middleware will come out with a default image (404 not found) 🎉
            return <CharacterCard imageSrc={imageSrc[0]} name={name} />;
          })}
        </Flex>
      </Container>
    </Box>
  );
};

export default Characters;
