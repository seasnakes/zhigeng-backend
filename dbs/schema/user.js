const mongoose = require('mongoose')

const { Schema, model } = mongoose

const UserSchema = new Schema({
  email: { type: String, required: true },
  pwd: { type: String, required: true, select: false },
}, { versionKey: false })

module.exports = model('User', UserSchema)
