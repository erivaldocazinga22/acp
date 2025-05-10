import {
	type NextAuthMiddlewareOptions,
	type NextRequestWithAuth,
	withAuth,
} from "next-auth/middleware";
import { type MiddlewareConfig, NextResponse } from "next/server";

const publicRoutes = [
	{ path: "/auth/sign-in", whenAuthenticated: "redirect" },
	{ path: "/auth/register", whenAuthenticated: "redirect" },
	{ path: "/auth/forgot-password", whenAuthenticated: "next" },
	{ path: "/legal/terms", whenAuthenticated: "next" },
	{ path: "/legal/privacy", whenAuthenticated: "next" },
	{ path: "/legal/help", whenAuthenticated: "next" },
	{ path: "/", whenAuthenticated: "next" },
] as const;
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/auth/sign-in";

async function middleware(request: NextRequestWithAuth) {
	console.log("MIDDLEWARE PATH:", request.nextUrl.pathname);
	const path = request.nextUrl.pathname;
	const publicRoute = publicRoutes.find((route) => route.path === path);
	const authToken = request.cookies.get("next-auth.session-token");

	if (!authToken && publicRoute) {
		return NextResponse.next();
	}

	if (!authToken && !publicRoute) {
		const redirectUrl = request.nextUrl.clone();
		redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
		return NextResponse.redirect(redirectUrl);
	}

	if (
		authToken &&
		publicRoute &&
		publicRoute.whenAuthenticated === "redirect"
	) {
		const redirectUrl = request.nextUrl.clone();
		redirectUrl.pathname = "/dashboard";
		return NextResponse.redirect(redirectUrl);
	}

	if (authToken && !publicRoute) {
		// checar se está expirado
		// se sim, remover o cookie e redirecionar para o login
		return NextResponse.next();
	}
	return NextResponse.next();
}

const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbackOptions);

export const config: MiddlewareConfig = {
	matcher: [
		"/dashboard/:path*",
		"/account/:path*",
		"/painel/:path*",
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		// "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	],
};
