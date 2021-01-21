export function getList() {
    return fetch('https://reqres.in/api/users?page=2')
      .then(data => data.json())
  }