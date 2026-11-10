# Expo dev server crashes on `Origin: null`

Reproduction for https://github.com/expo/expo/issues/53279

```sh
pnpm install
pnpm start
```

Open http://localhost:8081/no-referrer-form in Chrome and click **Submit**.

The page sends `Referrer-Policy: no-referrer`, so Chrome sends `Origin: null` with the same-origin form `POST`.

Expected: HTTP 200 with `{"origin":"null"}`.

Actual: HTTP 500. The dev server logs `TypeError: Invalid URL` from `@expo/cli/build/src/start/server/middleware/CorsMiddleware.js:74:40`.

`pnpm export && pnpm serve` returns HTTP 200 for the same request.
