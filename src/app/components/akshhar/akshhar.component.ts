import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-akshhar',
    templateUrl: './akshhar.component.html',
    styleUrls: ['./akshhar.component.css']
})
export class AkshharComponent implements OnInit {

    akshhars: any = {'a': 'अ', 'A': 'आ', 'i': 'इ', 'I': 'ई', 'u': 'उ', 'U': 'ऊ', 'RRi': 'ऋ', 'RRI': 'ॠ', 'lRRi': 'लृ', 'lRRI': 'लॄ',
                     'e': 'ए', 'E': 'ऐ', 'o': 'ओ', 'au': 'औ', 'a.n': 'अं', 'aH': 'अ:',
                     'ka': 'क', 'kha': 'ख', 'ga': 'ग', 'gha': 'घ', '~Na': 'ङ',
                     'cha': 'च', 'chha': 'छ', 'ja': 'ज', 'jha': 'झ', 'JNa': 'ञ',
                     'Ta': 'ट', 'Tha': 'ठ', 'Da': 'ड', 'Dha': 'ढ', 'Na': 'ण',
                     'ta': 'त', 'tha': 'थ', 'da': 'द', 'dha': 'ध', 'na': 'न',
                     'pa': 'प', 'pha': 'फ', 'ba': 'ब', 'bha': 'भ', 'ma': 'म',
                     'ya': 'य', 'ra': 'र', 'la': 'ल', 'va': 'व', 'sha': 'श', 'shha': 'ष',  'sa': 'स', 'ha': 'ह',
                     'kshha': 'क्ष', 'tr': 'त्र्', 'jJNa': 'ज्ञ'};

    categories: any;
    categories_all: any = {
        'svar - shudha (pure vowels)': {'name': 'स्वर - शुद्ध', 'akshhar': ['a', 'i', 'u', 'RRi', 'lRRi']},
        'svar - sanyukta (joint vowels)': {'name': 'स्वर - संयुक्त', 'akshhar': ['A', 'I', 'U', 'RRI', 'lRRI', 'e', 'E', 'o', 'au']},
        'anusvar/visarg': {'name': 'अनुस्वार/विसर्ग', 'akshhar': ['a.n', 'aH']},
        'vyanjan - kantha (consonants - throat)': {'name': 'व्यंजन - कण्ठ', 'akshhar': ['ka', 'kha', 'ga', 'gha', '~Na']},
        'vyanjan - taalu (consonants - soft palate)': {'name': 'व्यंजन - तालु', 'akshhar': ['cha', 'chha', 'ja', 'jha', 'JNa']},
        'vyanjan - moordha (consonants - hard palate)': {'name': 'व्यंजन - मूर्धा', 'akshhar': ['Ta', 'Tha', 'Da', 'Dha', 'Na']},
        'vyanjan - danta (consonants - teeth)': {'name': 'व्यंजन - मूर्धा', 'akshhar': ['Ta', 'Tha', 'Da', 'Dha', 'Na']},
        'vyanjan - oshhTha (consonants - lips)': {'name': 'व्यंजन - ओष्ठ', 'akshhar': ['pa', 'pha', 'ba', 'bha', 'ma']},
        'vyanjan - antaHastha (consonants - vowels created)': {'name': 'व्यंजन - अन्तःस्थ', 'akshhar': ['ya', 'ra', 'la', 'va']},
        'vyanjan - Ushhma (consonants - heat)': {'name': 'व्यंजन - ऊष्म', 'akshhar': ['sha', 'shha', 'sa', 'ha']},
        'vyanjan - sanyukta (consonants - joint)': {'name': 'व्यंजन - संयुक्त', 'akshhar': ['kshha', 'tr', 'jJNa']},
    }
    categories_anunasik: any = {
        'anunasik': {'name': 'अनुनासिक', 'akshhar': ['~Na', 'JNa', 'na', 'ma']},
    }

    categories_mradu: any = {
        'mradu': {'name': 'मृदु', 'akshhar': ['ga', 'gha', '~Na', 'ja', 'jha', 'JNa', 'Da', 'Dha', 'Na', 'ba', 'bha', 'ma', 'ya', 'ra', 'la', 'va', 'ha']},
    }

    categories_kathor: any = {
        'mradu': {'name': 'मृदु', 'akshhar': ['ka', 'kha', 'cha', 'chha', 'Ta', 'Tha', 'pa', 'pha', 'sha', 'shha', 'sa']},
    }

    current_categ: string = 'all';

    constructor() { }

    ngOnInit() {
    }

    getAkshhars(): string[] {
        return Object.keys(this.akshhars)
    }

    getCategories(): string[] {
        eval('this.categories = this.categories_' + this.current_categ);
        return Object.keys(this.categories);
    }

    showCategory(categ: string) {
        this.current_categ = categ;
    }
}
