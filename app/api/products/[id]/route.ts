import { NextResponse } from 'next/server';
import { products } from '../route';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const productId = parseInt(params.id);
  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  products[index] = { ...products[index], ...body };
  return NextResponse.json(products[index]);
}

export function DELETE(request: Request, { params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const index = products.findIndex(p => p.id === productId);

  if (index === -1) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }

  products.splice(index, 1);
  return NextResponse.json({ message: 'Product deleted' });
}
