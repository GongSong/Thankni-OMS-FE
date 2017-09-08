const CONST = {
  DEVELOPMENT: {
    OMS: 'http://api.local.com/api1',
    SERVER_2: 'http://api.local.com/api2',
    IMAGE: 'http://image.thankni.com'
  },
  TEST: {
    OMS: 'http://api.test.com/api1',
    SERVER_2: 'http://api.test.com/api2',
    IMAGE: 'http://image.thankni.com'
  },
  PRODUCTION: {
    OMS: 'http://api.online.com/api1',
    SERVER_2: 'http://api.online.com/api2',
    IMAGE: 'http://image.thankni.com'
  }
}

export default CONST[process.env.NODE_ENV.toUpperCase().toString()]
