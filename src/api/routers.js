import axios from '@/libs/api.request'

export const getRouterReq = (access) => {
  return axios.request({
    url: 'get_router',
    params: {
      access
    },
    method: 'get'
  })
}

export const getVersion = () => {
  return axios.request({
    url: '9527/version',
    method: 'get'
  })
}
