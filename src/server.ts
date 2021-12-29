import Koa from 'koa';

const server: Koa = new Koa();
const port = 3000;

server.use((ctx: Koa.DefaultContext) => {
  ctx.body = 'hi koa';
  const a = '123132';
  const a1 = '1';
});

server.listen(port, () => {
  console.log(`Node.js v${process.versions.node}`);
});
