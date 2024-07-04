/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BetCreateNestedManyWithoutRoomsInput } from "./BetCreateNestedManyWithoutRoomsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { MessageCreateNestedManyWithoutRoomsInput } from "./MessageCreateNestedManyWithoutRoomsInput";

@InputType()
class RoomCreateInput {
  @ApiProperty({
    required: false,
    type: () => BetCreateNestedManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => BetCreateNestedManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => BetCreateNestedManyWithoutRoomsInput, {
    nullable: true,
  })
  bets?: BetCreateNestedManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => MessageCreateNestedManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => MessageCreateNestedManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => MessageCreateNestedManyWithoutRoomsInput, {
    nullable: true,
  })
  messages?: MessageCreateNestedManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  owner?: string | null;
}

export { RoomCreateInput as RoomCreateInput };
