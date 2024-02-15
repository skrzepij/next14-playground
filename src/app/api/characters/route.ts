import { NextResponse } from 'next/server';

export const GET = async () => {
  const response = await fetch('https://narutodb.xyz/api/character');

  const data = await response.json();

  return NextResponse.json({ data }, { status: 200 });
};