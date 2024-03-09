"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const googleController_1 = require("../controllers/googleController");
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
// Configuração do Passport
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: '25954849925-jkt6f3m5adtp2qvhs151rapjs3jt4e8j.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/callback', // URL de retorno após o login do Google
}, (accessToken, refreshToken, profile, done) => {
    // Callback após o login do Google bem-sucedido
    // Aqui você pode criar ou autenticar um usuário no seu sistema com base nas informações do perfil.
    console.log(profile);
    return done(null, profile);
}));
const router = express_1.default.Router();
router.get('/', (req, res) => res.send('Server is running!'));
router.get('/login', (req, res) => res.render('auth/index'));
router.get('/auth', passport_1.default.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
router.get('/callback', googleController_1.profile);
exports.default = router;
