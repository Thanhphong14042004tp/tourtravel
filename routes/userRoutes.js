const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Lấy danh sách người dùng
router.get('/', userController.getAllUsers);

// Thêm người dùng mới
router.post('/', userController.createUser);

module.exports = router;
