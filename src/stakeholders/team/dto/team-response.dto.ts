// Path: src/stakeholders/team/dto/team-content.dto.ts
// DESC: team content dto
'use strict';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsObject, IsString, IsUUID, ValidateNested, Matches } from 'class-validator';
import { TeamContentDTO } from './team-content.dto';
import { TeamMetadataDTO } from './team-metadata.dto';

export class TeamResponseDTO {
  @ApiProperty({
    description: 'ID is Unique identifier for ' + TeamResponseDTO.name,
    example: 'abc.xyz',
  })
  @Expose({ name: 'ID', toPlainOnly: true })
  @IsNotEmpty({ message: 'ID cannot be empty' })
  @IsString({ message: 'ID must be a string' })
  @Matches(/^[a-z]+.[a-z]+\..*$/, {
    message: 'ID should follow the format "abc.xyz".',
  })
  ID: string;

  @ApiProperty({
    description:
      'UUID is Unique identifier in the format "00000000-0000-0000-0000-000000000000"' +
      ' for  ' +
      TeamResponseDTO.name,
    example: 'e.g. 00000000-0000-0000-0000-000000000000',
    // example: UUID_MSG.example,
  })
  @Expose({ name: 'UUID', toPlainOnly: true })
  @IsNotEmpty({ message: 'UUID cannot be empty' })
  @IsString({ message: 'UUID must be a string' })
  @IsUUID('all', {
    message: 'Please enter a valid UUID format (e.g. 00000000-0000-0000-0000-000000000000)',
  })
  UUID: string;

  @ApiProperty()
  @Expose({ name: 'metadata', toPlainOnly: true })
  @IsObject()
  @Type(() => TeamMetadataDTO)
  @ValidateNested({ each: true })
  metadata: TeamMetadataDTO;

  @ApiProperty()
  @Expose({ name: 'content', toPlainOnly: true })
  @IsObject()
  @Type(() => TeamContentDTO)
  @ValidateNested({ each: true })
  content: TeamContentDTO;

  constructor(ID: string, UUID: string, metadata: TeamMetadataDTO, content: TeamContentDTO) {
    this.ID = ID;
    this.UUID = UUID;
    this.metadata = metadata;
    this.content = content;
  }
}

export default TeamResponseDTO;
