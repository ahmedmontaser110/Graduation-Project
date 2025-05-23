export interface UserInfoResponse{
  userId:number,
  firstName:string,
  lastName:string,
  username:string,
  email:string,
  phoneNumber: string,
  profilePicture?: string,
  dateOfBirth?: Date,
  gender?: string,
  country?: string,
  city?: string,
  bio?: string,
  jobTitle?: string,
}
