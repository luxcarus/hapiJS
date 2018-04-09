class AbstractNamGaNae {
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
    console.log(this.body)
    fetch(`${this.host}/${this.path}`, {
      method: this.method,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.body)
    }).then(res => {
      if (res.ok) {
        res.json().then(data => {
          this.scb(data)
        });
      } else if (res.status == 401) {
        this.ecb(res)
      } else if (res.status == 404) {
        this.ecb(res)
      } else if (res.status == 500) {
        this.ecb(res)
      }
    }, e => {
      console.log("Error submitting form!")
      this.ecb(e)
    })
  }
  scb (data) {
    this.handler(data)(data)
  }
  ecb (e) {
    console.log(e)
  }
  tcb (t) {
    console.log(t)
  }
  handler (data) {
    switch (data.result) {
      case 0: return this.normal
      case 1: return this.abnormal
      case 2: return this.serverIssue
    }
  }
  normal () {}
  abnormal () {}
  serverIssue () {}
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
  setBody (_) {
    this.body = _
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