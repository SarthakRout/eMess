export interface LoginResponse {
  code: string;
  authToken?: string;
  userInfo?: any;
  userType: string
}

export interface GenpwdResponse {
  code: string;
}
