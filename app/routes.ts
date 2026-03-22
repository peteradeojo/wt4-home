import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/sloppyseconds", "routes/sloppyseconds.tsx"),
  ...prefix("/red", [
    route("/membership", "routes/membership.tsx"),
    index("routes/red.tsx"),
  ]),

  route("suite", "routes/suite/index.tsx", [
    route("qr", "routes/suite/qr.tsx"),
  ]),
] satisfies RouteConfig;
