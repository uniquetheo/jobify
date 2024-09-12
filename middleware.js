// export { default } from "next-auth/middleware";

import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.role);

    //   if (req.nextUrl.pathname.startsWith('/dashboard'))
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/dashboard"] };
