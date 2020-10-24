import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sliceString'
})
export class SliceStringPipe implements PipeTransform {

	public transform(value: string): string {
		if (value) {
			if (value.length > 40) {
				return value.slice(0, 40) + '...';
			}else{
				return value;
			}
		}

	}

}