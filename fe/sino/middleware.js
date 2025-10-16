import { NextResponse } from 'next/server'

const locales = ['en', 'zh', 'tr']
const defaultLocale = 'en'

export function middleware(request) {
  const { pathname } = request.nextUrl
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, favicon.ico, locales, etc.)
    '/((?!_next|api|favicon.ico|locales|.*\\..*).*)',
  ],
}
