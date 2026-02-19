import {bancos} from './bancos.js';

const getBancoId = (id) => {
    return bancos.find(banco => banco.id === id);
}
console.log(getBancoId(1));