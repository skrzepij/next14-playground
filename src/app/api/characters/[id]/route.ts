// get a specific, single character // based on id no.

import { NextResponse } from 'next/server';

interface CustomResponse extends Response {
  params: { id: string };
}

export const GET = async (_: Request, res: CustomResponse) => {
  const { id } = res.params;

  const response = await fetch(`${process.env.NARUTO_DOMAIN}/character/${id}`);
  const data = await response.json();

  return NextResponse.json({ data }, { status: 200 });
};
