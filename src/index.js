class FastCache {
  constructor() {
    this.state = {}
  }
  set(key, value) {
    this.state[key] = value

  }
  get(key) {
    return this.state[key]  
  }
}

window.FastCache = FastCache