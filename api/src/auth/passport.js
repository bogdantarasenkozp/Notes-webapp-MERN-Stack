import passport from "koa-passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from 'bcrypt';
import { generateTokens } from "./token";
import UserModel from '../models/User';

passport.use(
  new LocalStrategy(
    (username, password, done) => {
      
      UserModel.findOneOrCreate(
        {username:username},{username:username,password:password},(err,user) => {

          if (err)
           done( null, false, { message: 'Authentication err.' } );
          if(user && password == user.password){
            done( null,
              {
                username: user.username,
                verified: "true"
              },
              { message: 'Success' }
            );
          }

        }
      );

    }
  )
);

export const localAuth = (ctx, next) => {
  return passport.authenticate(
    'local', async (err, user, info) => {
      if (user === false) {
        ctx.status = 401;
        ctx.body = info.message;
      } else {
        try {
          const { accessToken, refreshToken } = await generateTokens({user}, "secret");
          ctx.body = {
            accessToken,
            refreshToken
          }
        } catch (e) {
          ctx.throw(500, e);
        }
      }
    }
  )(ctx, next);
};


export default passport;
