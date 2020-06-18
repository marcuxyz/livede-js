import app from './src'

app.listen(process.env.PORT, function() {
    console.log(`Server running on port: ${process.env.PORT}`)
})