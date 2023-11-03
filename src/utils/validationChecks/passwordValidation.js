export const passwordValidate = (password) => {
  const uppercasePattern = /[A-Z]/
  const digitPattern = /\d/
  const specialCharPattern = /[@$!%*?&]/

  if (password.length < 8) {
    return `password should have atleast 8 characters.`
  } else if (
    !(
      uppercasePattern.test(password) &&
      digitPattern.test(password) &&
      specialCharPattern.test(password)
    )
  ) {
    return 'Password must contain at least 1 uppercase letter, 1 digit, and 1 special character.'
  }

  return
}

export const passwordEquality = (password, confirmPassword) => {
  if (!confirmPassword) {
    return `enter valid password first`
  }
  if (confirmPassword && password !== confirmPassword) {
    return `passwords don't match.`
  }
  return
}
