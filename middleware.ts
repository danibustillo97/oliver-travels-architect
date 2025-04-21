
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Para cualquier necesidad futura de middleware
  return NextResponse.next();
}
