import { decode } from "next-auth/jwt";
import {
	type NextAuthMiddlewareOptions,
	type NextRequestWithAuth,
	withAuth,
} from "next-auth/middleware";
import { NextResponse } from "next/server";
import { env } from "./lib/env.config";

interface NextAuthJWTDecod {
	name: string;
	email: string;
	picture: string;
	sub: string;
	role: string;
	iat: number;
	exp: number;
	jti: string;
}
async function middleware(request: NextRequestWithAuth) {
	const { pathname } = request.nextUrl;
	const cookies = request.cookies.get("next-auth.session-token");
	const decoded: NextAuthJWTDecod = await decode({
		secret: env.NEXTAUTH_SECRET,
		token: cookies?.value,
	});

	if (decoded.role === "ADMIN") {
		
	}

	const isPrivatRoutes = pathname.startsWith("/painel");
	const isAdminUser = request.nextauth.token?.role === "ADMIN";

	if (isPrivatRoutes && !isAdminUser) {
		return NextResponse.rewrite(new URL("/sign-in", request.url));
	}

	return NextResponse.next();
}

const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbackOptions);

export const config = {
	matcher: ["/dashboard/:path*", "/account/:path*", "/painel/:path*"],
};
