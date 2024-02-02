import Link from "next/link";

export default async function Home(): Promise<JSX.Element> {

  return (
    <main>
      <ol>
        <li>
          <Link href={{pathname: '/params-in-ssr', search: 'name=Tadek'}}> Reading URL Params in SSR </Link>
        </li>
      </ol>
    </main>
  );
}
