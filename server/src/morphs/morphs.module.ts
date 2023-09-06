import { Module } from '@nestjs/common';

import { MetadataModule } from './metadata/metadata.module';

@Module({
  imports: [MetadataModule],
  exports: [],
})
export class MorphsModule {}