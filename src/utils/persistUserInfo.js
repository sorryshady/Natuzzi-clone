export const persistUserInfo = (user) => {
  localStorage.setItem('firstName', user.firstName)
  localStorage.setItem('id', user['_id'])
}
