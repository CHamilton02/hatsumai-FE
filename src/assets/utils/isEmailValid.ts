export default function isEmailValid(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email)
}
