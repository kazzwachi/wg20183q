var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', (req, res, next) => {
    let body = {};
    body.title = 'メンバー一覧';
    body.members = [
        {account : 'test01_test@test.com', name : 'テストユーザー０１'},
        {account : 'test02_test@test.com', name : 'テストユーザー０２'},
        {account : 'test03_test@test.com', name : 'テストユーザー０３'},
        {account : 'test04_test@test.com', name : 'テストユーザー０４'},
        {account : 'test05_test@test.com', name : 'テストユーザー０５'},
        {account : 'test06_test@test.com', name : 'テストユーザー０６'},
        {account : 'test07_test@test.com', name : 'テストユーザー０７'},
        {account : 'test08_test@test.com', name : 'テストユーザー０８'},
        {account : 'test09_test@test.com', name : 'テストユーザー０９'},
        {account : 'test10_test@test.com', name : 'テストユーザー１０'},
        {account : 'test11_test@test.com', name : 'テストユーザー１１'},
        {account : 'test12_test@test.com', name : 'テストユーザー１２'},
        {account : 'test13_test@test.com', name : 'テストユーザー１３'},
        {account : 'test14_test@test.com', name : 'テストユーザー１４'},
        {account : 'test15_test@test.com', name : 'テストユーザー１５'},
        {account : 'test16_test@test.com', name : 'テストユーザー１６'},
        {account : 'test17_test@test.com', name : 'テストユーザー１７'},
        {account : 'test18_test@test.com', name : 'テストユーザー１８'},
        {account : 'test19_test@test.com', name : 'テストユーザー１９'},
        {account : 'test20_test@test.com', name : 'テストユーザー２０'}
    ];
    res.render('members', body);
});

module.exports = router;
