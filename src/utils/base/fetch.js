import Axios from 'axios'
import server from '../../config/server'

export default class Fetch {
  constructor() {
    this.config = {
      timeout: 5000
    }

    // request 拦截器
    this.requestInterceptor = [request => {
      debugger
      // do something before request
      return request
    }, error => {
      debugger
      Promise.reject(error)
    }]

    // response 拦截器
    this.responseInterceptor = [response => {
      debugger
      const res = response.data
      if (res.code === 200) {
        // to deal status code

        return response.data
      } else {
        return Promise.reject(response.data)
      }
    }, error => {
      debugger
      Promise.reject(error)
    }]
  }

  serverA(config) {
    const service = new Axios(Object.assign(this.config, {
      baseURL: server.OMS
    }, config))
    debugger
    service.interceptors.request.use(...this.requestInterceptor)
    service.interceptors.response.use(...this.responseInterceptor)

    return service
  }

  serverB(config) {
    const service = new Axios(Object.assign(this.config, {
      baseURL: server.OMS
    }, config))
    service.interceptors.request.use(this.requestInterceptor)
    service.interceptors.response.use(this.responseInterceptor)

    return service
  }

}

