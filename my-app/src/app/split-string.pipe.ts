import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitString'
})
export class SplitStringPipe implements PipeTransform {

  public transform(stringToSplit: string, splitBy: string): string[] {
	return stringToSplit.split(splitBy);
  }

}
