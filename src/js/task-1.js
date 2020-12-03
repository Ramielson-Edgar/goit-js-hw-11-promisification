const delay = ms => {
  const tieme = ms;
  return Promise.resolve(tieme);
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
