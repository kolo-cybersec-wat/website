import { createHash } from 'node:crypto'
const hashEmail = (email: string) => createHash('md5').update(email).digest('hex')

