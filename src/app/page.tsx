import Link from 'next/link';
import { Container } from '@radix-ui/themes';

export default async function Home(): Promise<JSX.Element> {
  return (
    <Container>
      <ol>
        <li>
          <Link href={{ pathname: '/params-in-ssr', search: 'name=Tadek' }}>
            Reading URL Params in SSR
          </Link>
          <li>
            <Link href="/characters">
              Go to Naruto Page and meet the force of SSR Rendering 🎉
            </Link>
          </li>
        </li>
      </ol>
    </Container>
  );
}
