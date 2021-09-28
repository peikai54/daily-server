import * as Koa from "koa";
import * as Router from "koa-router";
import * as bodyParser from "koa-bodyparser";
import "reflect-metadata";
import AppRoutes, { withoutAuth } from "./routes";
import loading from "./mysql-loading";
import { getPath } from "./utils/route";
import { secretKey } from "./config";
const koaLog = require("koa-log");
const jwt = require("koa-jwt");
const cors = require("@koa/cors");

loading();

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
  jwt({ secret: secretKey }).unless({
    path: withoutAuth.map((el) => getPath(el.path)),
  })
);

app.use(bodyParser());
app.use(router.allowedMethods());
app.use(router.routes());
app.listen(5000);
