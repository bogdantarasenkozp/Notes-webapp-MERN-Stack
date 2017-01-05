import passport from "koa-passport";
import { Strategy as LocalStrategy } from "passport-local";
import { generateTokens } from "./token";
import UserModel from '../models/User';

passport.use(
  new LocalStrategy(
    (username, password, done) => {

      UserModel.findOneOrCreate(
        {username:username},{username:username,password:password},(err,user) => {
          if (err) done( null, false, { message: 'Incorrect username or password.' } );
          console.log(user)
          done( null,
            {
              username: user.username,
              verified: "true"
            },
            { message: 'Success' }
          );

        }
      )
      // if (username === "test" && password === "test") {
      //   console.log(1);
      //   done(null, {
      //     username: "test",
      //     verified: "true"
      //   }, { message: 'Success' });
      // } else if (username !== "test" || password !== "test") {
      //   done(null, false, { message: 'Incorrect username or password.' });
      // }

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
