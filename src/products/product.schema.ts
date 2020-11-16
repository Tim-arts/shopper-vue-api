import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  selected: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
