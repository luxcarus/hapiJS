console.log('log from http.js')

// export default class Http {
class Http {
  constructor () {
    this.host = 'http://localhost:10311'
    this.path
    this.method = 'POST'
    this.body
    this.data
    this.store
    this.headers 
  }
  send () {
    fetch(`${this.host}/${this.path}`, {
      method: this.method,
      headers: {"Content-Type": "application/json"},
      body: this.body
    }).then(res => {
      if (res.ok) {
        res.json().then(data => {
          console.log(data)
          this.scb(data)
        });
      } else if (res.status == 401) {
        console.log("Oops! You are not authorized.");
        this.ecb(res)
      } else if (res.status == 404) {
        console.log("Oops! 404")
        this.ecb(res)
      } else if (res.status == 500) {
        console.log("Oops! 500")
        this.ecb(res)
      }
    }, e => {
      console.log("Error submitting form!")
      this.ecb(res)
    })
  }

  scb () {}
  ecb () {}
  tcb () {}

	setHost (_) {
		this.level = _
		return this
	}
	setPath (_) {
		this.path = _
		return this
	}
	setMethod (_) {
		this.mothod = _
		return this
	}
  setRequestPayload (_) {
    this.requestPayload = _
    return this
  }
	setData (_) {
		this.data = _
		return this
	}
	setStore (_) {
		this.store = _
		return this
	}
}


// fetch("http://localhost:10311/test", {
//   method: "POST",
  // headers: {
  //  "Content-Type": "application/x-www-form-urlencoded"
  // },
  // body: "firstName=Nikhil&favColor=blue&password=easytoguess"
// }).then(function(res) {
//   if (res.ok) {
//     console.log("Perfect! Your settings are saved.");
//     res.json().then(function(data) {
//       console.log(data);
//     });
//   } else if (res.status == 401) {
//     console.log("Oops! You are not authorized.");
//   }
// }, function(e) {
//   console.log("Error submitting form!");
// })