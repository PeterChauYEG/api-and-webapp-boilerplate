// import log dependancies
import { init } from './log'

export const API_PASSWORD = process.env.API_PASSWORD
export const API_SECRET = process.env.API_SECRET
export const API_USER = process.env.API_USER
export const DB_NAME = process.env.DB_NAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_PORT = process.env.DB_PORT
export const DB_URL = process.env.DB_URL
export const DB_USER = process.env.DB_USER
export const SALT_ROUNDS = process.env.SALT_ROUNDS
export const log = {
  init,
}