import { FieldMetadataType } from 'src/metadata/field-metadata/field-metadata.entity';
import {
  ObjectMetadata,
  IsSystem,
  FieldMetadata,
  IsNullable,
} from 'src/workspace/workspace-sync-metadata/decorators/metadata.decorator';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';

@ObjectMetadata({
  namePlural: 'attachments',
  labelSingular: 'Attachment',
  labelPlural: 'Attachments',
  description: 'An attachment',
  icon: 'IconFileImport',
})
@IsSystem()
export class AttachmentObjectMetadata extends BaseObjectMetadata {
  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Name',
    description: 'Attachment name',
    icon: 'IconFileUpload',
  })
  name: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Full path',
    description: 'Attachment full path',
    icon: 'IconLink',
  })
  fullPath: string;

  @FieldMetadata({
    type: FieldMetadataType.TEXT,
    label: 'Type',
    description: 'Attachment type',
    icon: 'IconList',
  })
  type: string;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Author',
    description: 'Attachment author',
    icon: 'IconCircleUser',
    joinColumn: 'authorId',
  })
  author: string;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Activity',
    description: 'Attachment activity',
    icon: 'IconNotes',
    joinColumn: 'activityId',
  })
  activity: string;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Person',
    description: 'Attachment person',
    icon: 'IconUser',
    joinColumn: 'personId',
  })
  @IsNullable()
  person: string;

  @FieldMetadata({
    type: FieldMetadataType.RELATION,
    label: 'Company',
    description: 'Attachment company',
    icon: 'IconBuildingSkyscraper',
    joinColumn: 'companyId',
  })
  @IsNullable()
  company: string;
}