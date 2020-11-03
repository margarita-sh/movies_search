import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'fullDatePipe'
})
export class DatePipe implements PipeTransform {

	public transform(value: any): string {
		if (value) {
			const dateArray: any = value.split('-');
			const date: string[] = dateArray[2].substr(0, 1) === '0' ? dateArray[2].substr(1, 1) : dateArray[2];
			const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

			return `${date} ${months[dateArray[1] - 1]} ${dateArray[0]}`;
		}

	}

}
