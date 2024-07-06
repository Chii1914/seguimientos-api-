import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateFollowUpDto {
  @IsString()
  @IsNotEmpty()
  follow_up_id: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  notes: string;
}

export class AddFollowUpDto {
  @IsString()
  @IsNotEmpty()
  rut: string;

  follow_up: CreateFollowUpDto;
}
