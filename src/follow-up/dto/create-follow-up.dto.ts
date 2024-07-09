import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateFollowUpDto {

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  notes: string;
}

export class AddFollowUpDto {
  follow_up: CreateFollowUpDto;
}
