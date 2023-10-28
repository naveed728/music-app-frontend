export interface ILoginDetails {
    email: string;
    password: string;
  }

export interface IUserReqResponse {
    status: boolean;
    message: string;
}

export interface ILoginResponse {
    status: boolean;
    message: string;
    user: {
      firstName: string;
      lastName: string;
      email: string;
    };
    token: string;
  }
  export interface ISignUpDetails {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }
  
  
