
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertToNos' })
class convertKmNos implements PipeTransform {
   
    transform(value: number):string {
        return Math.round(value * 0.6214) + ' knots' 
    }

}

export {convertKmNos}