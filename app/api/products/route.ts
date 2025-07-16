import { NextResponse } from 'next/server';

export let products = [
  { id: 1, name: 'Baju Tie-Dye Wanita', price: 120000 },
  { id: 2, name: 'Sepatu Sneakers Pria', price: 275000 },
  { id: 3, name: 'Tote Bag Handmade', price: 95000 },
];

// GET
export function GET() {
  return NextResponse.json(products);
}

// POST
export async function POST(request: Request) {
  const body = await request.json();
  const newProduct = {
    id: products.length + 1,
    name: body.name,
    price: body.price,
  };
  products.push(newProduct);
  return NextResponse.json(newProduct);
}
