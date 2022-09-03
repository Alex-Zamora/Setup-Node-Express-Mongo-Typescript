export default {
  port: 3000,
  dbUri: 'mongodb://localhost:27017/auth-jwt-test',
  whiteList: [
    'http://localhost:3000',
    'https://www.example.com'
  ]
}