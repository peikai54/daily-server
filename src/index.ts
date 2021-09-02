import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import AppRoutes from "./routes";
const jwt = require("koa-jwt");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "1";
});

app.use(jwt({ secret: "key" }));

//路由
AppRoutes.forEach((route) => router[route.method](route.path, route.action));

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(5000);

console.log(`应用启动成功 端口:3000`);
