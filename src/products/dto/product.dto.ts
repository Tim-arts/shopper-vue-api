import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class ProductDto {
  @IsString() @IsOptional() readonly _id: string;
  @IsString() readonly name: string;
  @IsString() readonly slug: string;
  @IsBoolean() readonly selected: boolean;
}
