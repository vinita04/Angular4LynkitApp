export class User {
 
  public name: string;
  public email: string;
	public number: number;
  public password: {
      pwd:string;
      confirmPwd: string;
    }
 
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
 
}
