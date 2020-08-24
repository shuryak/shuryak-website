const address: string = 'http://localhost:8181/api/';

export const ArticlesMethods = {
  Create: address + `articles.create`,
  Update: address + `articles.update`,
  FindOne: address + 'articles.findOne',
  FindMany: address + 'articles.findMany',
  GetById: address + 'articles.getById',
  GetList: address + 'articles.getList',
  GetDraftsList: address + 'articles.getDraftsList'
}

export const UsersMethods = {
  Register: address + 'users.register',
  Login: address + 'users.login',
  GetUserInfo: address + 'users.getUserInfo',
  RefreshTokenPair: address + 'users.refreshTokenPair'
}
