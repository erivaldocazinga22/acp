import {
	type NextAuthMiddlewareOptions,
	type NextRequestWithAuth,
	withAuth,
} from "next-auth/middleware";
import { NextResponse, userAgent } from "next/server";

function middleware(request: NextRequestWithAuth) {
	console.log("Middleware rodando...");
	const url = request.nextUrl;

	const { device } = userAgent(request);
	const viewport = device.type === "mobile" ? "mobile" : "desktop";
	url.searchParams.set("viewport", viewport);

	console.log({ viewport, device });

	const isPrivatRoutes = request.nextUrl.pathname.startsWith("/painel");
	const isAdminUser = request.nextauth.token?.role === "ADMIN";
	if (isPrivatRoutes && !isAdminUser) {
		return NextResponse.rewrite(new URL("/sign-in", request.url));
	}

	return NextResponse.rewrite(url);
}

const callbackOptions: NextAuthMiddlewareOptions = {};
export default withAuth(middleware, callbackOptions);

// export const config = {
// 	matcher: [
// 		/*
// 		 * Match all request paths except for the ones starting with:
// 		 * - api (API routes)
// 		 * - _next/static (static files)
// 		 * - _next/image (image optimization files)
// 		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
// 		 */
// 		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
// 	],
// };

export const config = {
	matcher: "/painel",
};
