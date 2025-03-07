import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { ProductInterface } from "@/app/interfaces/product";

export async function GET(req: Request, { params }: { params: { productId: number } }) {
  const { productId } = params;

  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const products: ProductInterface[] = JSON.parse(fileContents);

  console.log("products", products);

  const product = products.find((item: ProductInterface) => Number(item.id) == productId );

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
