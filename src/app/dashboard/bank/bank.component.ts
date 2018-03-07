import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BankService } from './bank.service';
import { Bank } from './bank.model';

declare var $: any;

@Component({
    selector: 'app-bank',
    templateUrl: './bank.component.html',
    styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit, OnDestroy {
    public loading: boolean;
    public banks: Bank[];
    public bank: Bank;
    public bankSubscription: Subscription;
    public modalTitle: string;

    constructor(private bankService: BankService) { }

    ngOnInit() {
        this.getBanks();
    }

    ngOnDestroy() {
        if (this.bankSubscription) {
            this.bankSubscription.unsubscribe();
        }
    }

    private getBanks(): void {
        this.banks = [];
        this.loading = true;
        this.bankSubscription = this.bankService
            .getBanks()
            .subscribe((response) => {
                this.banks = response;
                this.loading = false;
            }, () => {
                this.loading = false;
            });
    }

    private save(): void {
        this.bankService
            .createOrUpdate(this.bank)
            .subscribe(() => {
                $('#bank-modal').modal('hide');
                this.getBanks();
            });
    }

    private remove(): void {
        this.bankService
            .remove(this.bank.id)
            .subscribe(() => {
                $('#confirmation-modal').modal('hide');
                this.getBanks();
            });
    }

    private showModal(): void {
        $('#bank-modal')
            .modal({
                closable  : false,
                onApprove : () => {
                    this.save();
                }
            })
            .modal('show');
    }

    private showConfirmationModal(): void {
        $('#confirmation-modal')
            .modal({
                onApprove : () => {
                    this.remove();
                }
            })
            .modal('show');
    }

    public addOrEditBank(bank?: Bank): void {
        this.bank = new Bank();
        if (!bank) {
            this.modalTitle = 'Agregar';
        } else {
            this.modalTitle = 'Editar';
            Object.assign<Bank, Bank>(this.bank, bank);
        }
        this.showModal();
    }

    public deleteBank(ev: Event, bank: Bank): void {
        ev.preventDefault();
        ev.stopPropagation();
        this.bank = new Bank();
        Object.assign<Bank, Bank>(this.bank, bank);
        this.showConfirmationModal();
    }

}
