import { Schema } from 'mongoose'

export interface Order {
  material: string
  amount: number
  currency: string
  price: number
  timestamp: string
  delivery: {
      first_name: string
      last_name: string
      address: {
          street_name: string
          street_number: string
          city: string
      }
  }
}

export const schema = new Schema<Order>({
  material: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: String, required: true },
  delivery: {type: new Schema({
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      address: new Schema({
          street_name: { type: String, required: true },
          street_number: { type: String, required: true },
          city: { type: String, required: true }
      })
    }), required: true}
})