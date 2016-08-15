import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    getJogos() {
        return ['Just Cause 3', 'Rise Tomb Rider', 'GTA V', 'Rust'];
    }

}