const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret = "123456789123456789123456789123";

router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', 'Minimum length of pass should be 5').isLength({ min: 5 })],
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secpass = await bcrypt.hash(req.body.password, salt);
        try {
            await User.create({
                name: req.body.name,
                password: secpass,
                email: req.body.email,
                location: req.body.location
            });
            return res.json({ success: true });
        } catch (error) {
            console.error("Error creating user:", error); // Log the actual error
            return res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
);

router.post("/loginuser", [
    body('email').isEmail(),
    body('password', 'Minimum length of pass should be 5').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        let email = req.body.email;
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ success: false, errors: "Try logging in with correct credentials" });
            }

            const pwdcompare = await bcrypt.compare(req.body.password, userData.password);
            if (!pwdcompare) {
                return res.status(400).json({ success: false, errors: "Try logging in with correct credentials" });
            }

            const data = {
                user: {
                    id: userData.id
                }
            };
            const authToken = jwt.sign(data, jwtsecret);
            return res.json({ success: true, authToken: authToken });
        } catch (error) {
            console.error("Error during login:", error); // Log the actual error
            return res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
);

module.exports = router;
