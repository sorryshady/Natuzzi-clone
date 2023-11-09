export const persistUserInfo = (user) => {
  document.cookie = 'loggedIn = true'
  localStorage.setItem('firstName', user.firstName)
  localStorage.setItem('id', user['_id'])
}

