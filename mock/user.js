import { defineFakeRoute } from 'vite-plugin-fake-server/client'

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default defineFakeRoute([
  {
    url: '/sys/user/login',
    method: 'POST',
    response: ({ body }) => {
      const token = tokens[body.username]

      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },
  {
    url: '/sys/user/info',
    method: 'GET',
    response: ({ query }) => {
      const info = users[query.token]

      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to GET user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },
  {
    url: '/sys/user/logout',
    method: 'POST',
    response: () => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
])
