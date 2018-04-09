class Signin extends AbstractNamGaNae {
  constructor () {
    super()
    this.path = 'signin'
  }
  request (args) {
    const {parameter} = args
    this.setBody(parameter).send()
  }
  normal (data) {
    console.log('--00')
    console.log(data)
    window.location.href = '/dashboard'
  }
}
