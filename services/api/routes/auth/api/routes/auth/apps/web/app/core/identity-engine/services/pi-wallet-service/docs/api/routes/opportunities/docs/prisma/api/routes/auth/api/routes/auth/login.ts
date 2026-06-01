import prisma from "../../../prisma/client";

export async function loginUser(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
}
