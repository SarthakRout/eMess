export interface LoginResponse {
  code: string;
  authToken?: string;
  userInfo?: any;
}

export interface GenpwdResponse {
  code: string;
}
