export const persistUserInfo = (token, rememberMe = false) => {
  if (rememberMe) {
    localStorage.setItem('jwt', token)
  } else {
    sessionStorage.setItem('jwt', token)
  }
}
