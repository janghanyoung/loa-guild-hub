import { getLostArkSiblings } from "@/lib/lostark/siblings";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ characterName: string }> }
) {
  const { characterName } = await params;

  try {
    const data = await getLostArkSiblings(characterName);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "로아 API 호출 실패",
      },
      { status: 500 }
    );
  }
}
