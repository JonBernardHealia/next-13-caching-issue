import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../_utils/prisma';

export const GET = async (request: NextRequest) => {
  const date = new Date().toString();
  const count = await prisma.todo.count();
  
  return NextResponse.json({ count });
};

export const POST = async (request: NextRequest) => {
  const date = new Date().toString();
  const todo = await prisma.todo.create({
    data: { title: `my title ${date}` },
  });
  
  return NextResponse.json(todo);
};

export const PUT = async (request: NextRequest) => {
  await prisma.todo.deleteMany();
  
  return NextResponse.json({ status: 200 });
};
