import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "/models/Users";
// import bcrypt
import bcrypt from "bcryptjs";

export const options = {
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-name@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({ email: credentials.email })
            .lean()
            .exec();
          if (foundUser) {
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            if (match) {
              console.log("good pass");
              delete foundUser.password;

              foundUser["role"] = "Unverified email";
              return foundUser;
            }
          }
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
    GoogleProvider({
      profile(profile) {
        console.log("profile:::", profile);

        let userRole = "Google User";
        if (profile?.email == "unique.theo98@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
          id: profile.sub,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
