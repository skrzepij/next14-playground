type QueryParams = {
  id: string;
};

const CharacterOverview = async ({ params }: { params: QueryParams }) => {
  const id = params.id;

  const response = await fetch(`${process.env.NARUTO_DOMAIN}/character/${id}`);

  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
};

export default CharacterOverview;
