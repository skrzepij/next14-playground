import Link from "next/link";
import {Container} from '@radix-ui/themes';

export default async function Home(): Promise<JSX.Element> {

  return (
    <Container>
      <ol>
        <li>
          <Link href={{pathname: '/params-in-ssr', search: 'name=Tadek'}}>
            Reading URL Params in SSR
          </Link>
        </li>
      </ol>
    </Container>
  );
}
