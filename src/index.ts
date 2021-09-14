import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import AppRoutes, { withoutAuth } from "./routes";
import { getPath } from "./utils/route";
const koaLog = require("koa-log");
const jwt = require("koa-jwt");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(koaLog());

withoutAuth.forEach((route) =>
  router[route.method](getPath(route.path), route.action)
);

AppRoutes.forEach((route) =>
  router[route.method](getPath(route.path), route.action)
);

app.use(
  jwt({ secret: "key" }).unless({
    path: withoutAuth.map((el) => getPath(el.path)),
  })
);

app.use(bodyParser());
app.use(router.allowedMethods());
app.use(router.routes());
app.listen(5000);
