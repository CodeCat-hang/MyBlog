module.exports = (app) => {
    const express = require("express");
    const assert = require("http-assert");
    const jwt = require("jsonwebtoken");
    const AdminUser = require("../../models/AdminUser");
    const sendEmail = require("../../plugins/sendEmail.js");
    const router = express.Router({
        mergeParams: true,
    });
    //创建资源
    router.post("/", async(req, res) => {
        const model = await req.Model.create(req.body);
        res.send(model);
    });
    //更新资源
    router.put("/:id", async(req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(model);
    });
    //删除资源
    router.delete("/:id", async(req, res) => {
        await req.Model.findByIdAndDelete(req.params.id, req.body);
        res.send({
            success: true,
        });
    });
    //资源列表
    router.get("/", async(req, res) => {
        const queryOptions = {};
        if (req.Model.modelName === "Category") {
            queryOptions.populate = "parent";
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100);
        res.send(items);
    });
    //资源详情
    router.get("/:id", async(req, res) => {
        const model = await req.Model.findById(req.params.id);
        res.send(model);
    });

    //登录校验中间件
    const authMiddleware = require("../../middleware/auth");

    //资源中间件
    const resourceMiddleware = require("../../middleware/resource");

    //资源路由
    app.use(
        "/admin/api/rest/:resource",
        authMiddleware(),
        resourceMiddleware(),
        router
    );

    //图片上传
    const multer = require("multer");
    const MAO = require("multer-aliyun-oss");
    const upload = multer({
        // storage: MAO({
        //     config: {
        //         region: "oss-cn-shenzhen", // // 阿里云oss的所在区域
        //         accessKeyId: "your accessKeyId", // 阿里云oss的accessKeyId，要自己去创建
        //         accessKeySecret: "your accessKeySecret", // 阿里云oss的accessKeySecret
        //         bucket: "miqilin-blog", // 阿里云oss的bucket's name
        //     },
        // }),
        dest: __dirname + '/../../uploads'
    });
    app.post(
        "/admin/api/upload",
        authMiddleware(),
        upload.single("file"),
        async(req, res) => {
            const file = req.file;
            file.url = `http://blog.hangxinyu.cn/uploads/${file.filename}`;
            res.send(file);
        }
    );

    //登录
    app.post("/admin/api/login", async(req, res) => {
        const {
            username,
            password
        } = req.body;
        const user = await AdminUser.findOne({
            username,
        }).select("+password");
        assert(user, 422, "用户不存在");
        const isValid = require("bcryptjs").compareSync(password, user.password);
        assert(isValid, 422, "账号或密码错误");
        const token = jwt.sign({
                id: user._id,
            },
            app.get("secret")
        );
        res.send({
            token,
            username,
        });
    });

    app.post("/admin/api/email", async(req, res) => {
        console.log(req.body);
        sendEmail(req.body);
        res.send({
            ok: "ok",
        });
    });

    //错误处理
    app.use(async(err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message,
        });
    });
};