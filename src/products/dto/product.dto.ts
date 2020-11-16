import { IsString, IsBoolean } from 'class-validator';

export class ProductDto {
  @IsString() readonly _id: string;
  @IsString() readonly name: string;
  @IsString() readonly slug: string;
  @IsBoolean() readonly selected: boolean;
}
