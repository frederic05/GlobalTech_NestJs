import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UpperFusionPipe implements PipeTransform {
  transform(entry: { data: string[] }, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      return entry.data.map((elemt) => elemt.toUpperCase()).join('-');
    }
    return entry;
  }
}
