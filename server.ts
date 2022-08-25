import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";

const app = new Application();
const port = parseInt(Deno.env.get('PORT') ?? '3000')

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen(`:${port}`);