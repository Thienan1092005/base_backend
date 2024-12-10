import express from 'express'

const port = 3000

const app = express()

app.get('/', (req, res) => {
  res.json({
    name: 'test',
    author: 'Yuki'
  })
})

app.listen(port, () => {
  console.log(`server is running  on ${port}`)
})
