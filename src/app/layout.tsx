import type { Metadata } from 'next';
import {Box, Theme} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme accentColor="crimson" grayColor="sand" radius="large">
          <Box p="5">
          {children}
          </Box>
        </Theme>
      </body>
    </html>
  );
}
