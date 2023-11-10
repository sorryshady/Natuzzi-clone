export const persistUserInfo = (user, tokenExpiry) => {
  const expiryDate = new Date(tokenExpiry)
  const formattedExpiryDate = expiryDate.toUTCString()
  document.cookie = `loggedIn = true; expires=${formattedExpiryDate}; path=/`
  localStorage.setItem('firstName', user.firstName)
  localStorage.setItem('id', user['_id'])
}
