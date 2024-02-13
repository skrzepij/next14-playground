import {Card, Container, Heading, Text} from "@radix-ui/themes";

type AvailableParams = {
  searchParams: {
    name: string
  }
}
export default async function ParamsInSSR({searchParams}: AvailableParams): Promise<JSX.Element> {
  const {name = 'stranger'} = searchParams;

  return (
    <Container>
      <header>
        <Heading size="7">Params in SSR</Heading>
        <Text as="p">change URL search param value (<code>?name=new_value</code>) to display different results</Text>
      </header>
      <section className="py-10">
        <Heading as="h2" size="5">Result:</Heading>
        <Card size="5">
          <Text as="p" size="5" className="text-center">{`Hello ${name}!`}</Text>
        </Card>
      </section>
    </Container>
  );
}
