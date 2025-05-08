import {
	type NextAuthMiddlewareOptions,
	type NextRequestWithAuth,
	withAuth,
} from "next-auth/middleware";
import { NextResponse } from "next/server";

function middleware(request: NextRequestWithAuth) {
	const { pathname } = request.nextUrl;

	const isPrivatRoutes = request.nextUrl.pathname.startsWith("/painel");
	const isAdminUser = request.nextauth.token?.role === "ADMIN";

	if (isPrivatRoutes && !isAdminUser) {
		return NextResponse.rewrite(new URL("/sign-in", request.url));
	}

	return NextResponse.next();
}

const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbackOptions);

export const config = {
	matcher: ["/dashboard", "/dashboard/:path*"],
};
