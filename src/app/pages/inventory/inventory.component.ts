import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [FormsModule, CommonModule],
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
    searchText: string = ''
    username: string = 'blueorangeintegrationtech-AD9F0T.924DQX';
    password: string = 'a8793f3d-3d26-4e97-96be-f42c6e85a59b';
    basicAuth = 'Basic ' + btoa(`${this.username}:${this.password}`);
    url: string = 'https://c02-usa-east.integrate-test.boomi.com/ws/simple/getInventoryStatus';
    data: any[] = [];
    dataToShow: any[] = [];
    constructor(private http: HttpClient) { }

    searchByCodeOrByName(input: string, data: any[]): any[] {
        const resultados: any[] = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            if (item.productId?.includes(input) || item.productName?.includes(input)) {
                resultados.push(item);
            }
        }
        return resultados;
    }

    search() {
        if (this.searchText === '') {
            this.dataToShow = this.data.slice();
        } else {
            this.dataToShow = this.searchByCodeOrByName(this.searchText, this.dataToShow);
        }

    }

    ngOnInit(): void {
        const headers = new HttpHeaders({
            'Authorization': this.basicAuth
        });
        this.http.get(this.url, { headers })
            .subscribe((response: any) => {
                this.data = response.products;
                this.dataToShow = this.data.slice();
            }, (error: any) => {
                console.error('Error al obtener los datos:', error);
            });
    }
}