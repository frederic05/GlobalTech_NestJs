import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetItemDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  item: number;
}
