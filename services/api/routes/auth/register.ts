export async function registerUser(data: any) {
  return {
    success: true,
    message: "User registered successfully",
    user: data,
  };
}
