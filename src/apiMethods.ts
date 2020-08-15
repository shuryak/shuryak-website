const address: string = 'http://localhost:8181/api/';

export const ArticlesMethods = {
  Create: address + `articles.create`,
  FindOne: address + 'articles.findOne',
  FindMany: address + 'articles.findMany',
  GetById: address + 'articles.getById',
  GetList: address + 'articles.getList'
}

export const UsersMethods = {
  Register: address + 'users.register',
  Login: address + 'users.login',
  RefreshTokenPair: address + 'users.refreshTokenPair'
}
