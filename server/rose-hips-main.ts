// @ts-ignore
import express from 'express'
// @ts-ignore
import bodyParser from 'body-parser'
// @ts-ignore
import cors from 'cors'
// @ts-ignore
import path from 'path'

import { Response, Request } from './apiInterfaces/apiInterfaces'
import { SERVER } from './server-config'
import { registerStudentForClass } from './controllers/register'

const app = express()
app.use(bodyParser.json({ limit: '10mb' }))
app.use(cors())

// ================================== \\

app.post('/api/register', registerStudentForClass);

app.use(express.static(__dirname + `/../app/dist`));
app.all('/{*any}', (_: Request, response: Response) => {
    response.sendFile(path.join(__dirname + '/../app/dist/index.html'))
})

// ================================== \\

app.listen(SERVER, () => {
    console.log(`The sweet always turns to bitter ${SERVER}`)
})