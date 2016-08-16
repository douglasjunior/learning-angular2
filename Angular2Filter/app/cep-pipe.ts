import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'cep'
})
export class CepPipe implements PipeTransform {
    transform(value: string) : string {
        // 87300000 => 87300-000
        return value.substr(0, 5) + "-" + value.substr(5, 3);
    }
}