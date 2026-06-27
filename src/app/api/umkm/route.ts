import { NextRequest, NextResponse } from "next/server";
import { getAllUMKM } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || undefined;
    const category = searchParams.get("category") || undefined;
    const village = searchParams.get("village") || undefined;

    const umkmList = await getAllUMKM({ search, category, village });
    return NextResponse.json(umkmList);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data UMKM" },
      { status: 500 }
    );
  }
}
