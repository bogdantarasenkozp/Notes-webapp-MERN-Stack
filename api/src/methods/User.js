import UserModel from '../models/User';

const getAllUserData = (username) => {
  return UserModel.findOne(
    {username:username},(err,user) => {
      if (err) throw err;
      return user;
    }
  )
}

export default { getAllUserData }
