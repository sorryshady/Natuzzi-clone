import { jwtDecode } from 'jwt-decode'
export const persistUserInfo = (token, rememberMe = false) => {
  const { userName } = jwtDecode(token)
  const firstName = userName.split(' ')[0]
  if (rememberMe) {
    localStorage.setItem('jwt', token)
    localStorage.setItem('firstName', firstName)
  } else {
    sessionStorage.setItem('jwt', token)
    sessionStorage.setItem('firstName', firstName)
  }
}
