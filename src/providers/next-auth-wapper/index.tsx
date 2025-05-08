import { NextAuthProvider } from "./next-auth.provider";

export const NextAuthWapper = ({ children }: { children: React.ReactNode }) => {
	return <NextAuthProvider>{children}</NextAuthProvider>;
};
