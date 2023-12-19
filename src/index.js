export default class Validator {
  constructor(nickname) {
    this.nickname = nickname;
  }

  validateUsername() {
    const name = this.nickname;
    const check1 = /^[^\d_-]+[\dA-Za-z_-]*[^\d_-]+$/.test(name);
    const check2 = !(/\d{4}/.test(name));
    if (check1 && check2) {
      return true;
    }
    return false;
  }
}
