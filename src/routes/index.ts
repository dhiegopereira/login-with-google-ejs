import express from 'express';
import { profile } from '../controllers/googleController';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

// Configuração do Passport
passport.use(
  new GoogleStrategy(
    {
      clientID: '25954849925-jkt6f3m5adtp2qvhs151rapjs3jt4e8j.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/callback', // URL de retorno após o login do Google
    },
    (accessToken, refreshToken, profile, done) => {
      // Callback após o login do Google bem-sucedido
      // Aqui você pode criar ou autenticar um usuário no seu sistema com base nas informações do perfil.
      console.log(profile);
      
      return done(null, profile);
    }
  )
);

const router = express.Router();

router.get('/', (req, res) => res.send('Server is running!'))
router.get('/login', (req, res) => res.render('auth/index'))
router.get('/auth', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
router.get('/callback', profile);

export default router;
