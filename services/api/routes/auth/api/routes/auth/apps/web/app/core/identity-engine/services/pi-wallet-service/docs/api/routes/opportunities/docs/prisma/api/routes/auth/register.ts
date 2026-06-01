import prisma from "../../../prisma/client";

export async function registerUser(data: any) {
  const user = await prisma.user.create({
    data: {
      email: data.email,
      username: data.username,
      fullName: data.fullName,
    },
  });

  return user;
}
