// src/app/(auth)/auth/callback/route.ts

import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    // ⭐️ INI DIA SOLUSINYA: TAMBAHKAN 'await' ⭐️
    const cookieStore = await cookies();

    // Buat client secara INLINE (Mandiri)
    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        get(name: string) {
          // 'cookieStore' sekarang adalah object yang benar, bukan Promise
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options });
        }
      }
    });

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Sukses: Redirect ke /
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Gagal: Redirect ke halaman sign-in
  return NextResponse.redirect(`${origin}/SignIn?error=auth_failed`);
}
