import { NextRequest, NextResponse } from "next/server";
import { getUMKMById } from "@/lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const umkm = await getUMKMById(id);

    if (!umkm) {
      return NextResponse.json(
        { error: "UMKM tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(umkm);
  } catch (error) {
    return NextResponse.json(
      { error: "Gagal mengambil data detail UMKM" },
      { status: 500 }
    );
  }
}
