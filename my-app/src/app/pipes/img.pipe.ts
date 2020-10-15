import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {
  public transform(imagePath: string): void {
	/* return imagePath === 'N/A' ? 'https://image.tmdb.org/t/p/w300' : imagePath; */
  }
}
