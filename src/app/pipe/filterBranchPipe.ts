import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBranch',
    pure: false
})
export class FilterBranchPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(function (rec) {
            return rec.SOL_ID.toString().indexOf(filter.toString()) !== -1 || rec.BRANCH_NAME.toLowerCase().indexOf(filter.toString().toLowerCase()) !== -1;
        });
    }
}