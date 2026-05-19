import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main.tsx",
    [
      index("routes/home.tsx"),
      route("/about", "routes/about.tsx"),
      route("/join", "routes/membership.tsx", {
        id: "join-us"
      }),
    ]
  ),
  route("/sloppyseconds", "routes/sloppyseconds.tsx"),
  ...prefix("/red", [
    route("/membership", "routes/membership.tsx"),
    index("routes/red.tsx"),
  ]),

  route("suite", "routes/suite/index.tsx", [
    route("qr", "routes/suite/qr.tsx"),
  ]),
] satisfies RouteConfig;
