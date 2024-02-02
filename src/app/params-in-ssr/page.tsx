type AvailableParams = {
  searchParams: {
    name: string
  }
}
export default async function ParamsInSSR({searchParams}: AvailableParams): Promise<JSX.Element> {
  const { name = 'stranger' } = searchParams;

  return (
    <main>
      <header>
        <h1>Params in SSR</h1>
        <p>change URL search param value (<code>?name=new_value</code>) to display different results</p>
      </header>
      <section className="py-10">
        <h2>Result:</h2>
        <h3 className="text-center">{`Hello ${name}!`}</h3>
      </section>
    </main>
  );
}
