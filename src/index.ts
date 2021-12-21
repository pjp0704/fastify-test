import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

fastify.listen(+process.env.PORT!, (err, address) => {
  console.log(address);
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
