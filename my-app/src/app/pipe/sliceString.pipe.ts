import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sliceString'
})
export class SliceStringPipe implements PipeTransform {
public maxLength: number = 40;
	public transform(value: string): string {
		// tslint:disable-next-line: strict-boolean-expressions
		if (value) {
			if (value.length > this.maxLength) {
				return value.slice(0, this.maxLength) + '...';
			} else {
				return value;
			}
		}

	}

}
