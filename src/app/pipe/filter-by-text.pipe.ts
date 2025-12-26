import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByText',
  standalone: true,
  pure: true
})
export class FilterByTextPipe implements PipeTransform {

  transform<T extends Record<string, any>>(
    items: T[] | null,
    searchText: string,
    keys: (keyof T)[]
  ): T[] {
    if (!items || !searchText) {
      return items || [];
    }

    const lower = searchText.toLowerCase();

    return items.filter(item =>
      keys.some(key =>
        String(item[key] ?? '')
          .toLowerCase()
          .includes(lower)
      )
    );
  }

}
