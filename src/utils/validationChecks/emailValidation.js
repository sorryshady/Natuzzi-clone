export const emailValidate = (email) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const valid = emailPattern.test(email)
  if (!valid) {
    return 'check email format.'
  } else {
    return
  }
}
