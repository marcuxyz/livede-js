import app from './src'

const port = process.env.PORT || 3002

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`)
})
