type QueryParams = {
  id: string;
};

const CharacterOverview = async ({ params }: { params: QueryParams }) => {
  const id = params.id;

  const response = await fetch(`http://localhost:3000/api/characters/${id}`);

  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
};

export default CharacterOverview;
