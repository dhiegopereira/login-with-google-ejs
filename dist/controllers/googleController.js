"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = void 0;
const profile = (req, res) => {
    res.render('profile/index', { code: req.query.code });
};
exports.profile = profile;
