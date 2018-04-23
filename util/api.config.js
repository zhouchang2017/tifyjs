module.exports = {
  client: {
    index: () => `client`,
    body: () => `client/body`,
    posts: () => `client/post`,
    byCatelog: () => `client/post/catelog`
  },
  posts: {
    show: id => `client/posts/${id}`
  },
  catelogs: {
    index: () => `client/catelogs`
  }
}
