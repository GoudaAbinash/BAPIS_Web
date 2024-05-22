import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'salesfilter',
    pure: false
})
export class SalesFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function(rec){
            return rec.name.toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1;
        });
    }
}