exports.handler = (event, context, callback) => {
  return Promise.resolve({
    statusCode: 200,
    body: "Hello, from lighting talks!",
  })
}
