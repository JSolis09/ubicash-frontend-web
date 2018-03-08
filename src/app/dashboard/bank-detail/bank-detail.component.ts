import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { BankService } from '../bank/bank.service';
import { BankDetailService } from './bank-detail.service';
import { Bank, BankDetail } from '../bank/bank.model';

declare var $: any;

@Component({
    selector: 'app-bank-detail',
    templateUrl: './bank-detail.component.html',
    styleUrls: ['./bank-detail.component.scss']
})
export class BankDetailComponent implements OnInit, OnDestroy {
    public loadingForm: boolean;
    public loading: boolean;
    public banks: Bank[];
    public bank: string;
    public selected: BankFilter = { } as BankFilter;
    public bankDetails: BankDetail[];
    public bankDetail: BankDetail;
    public bankSubscription: Subscription;
    public modalTitle: string;
    public query: string;
    public showBankDetail: boolean;
    public btnLoading: boolean;

    constructor(private bankService: BankService,
                private bankDetailService: BankDetailService) { }

    ngOnInit() {
        this.banks = [];
        this.loadingForm = true;
        this.bankSubscription = this.bankService
            .getBanks()
            .subscribe((response) => {
                this.banks = response.splice(0);
                this.initDropdown();
                this.loadingForm = false;
            }, () => {
                this.loadingForm = false;
            });
    }

    ngOnDestroy() {
        if (this.bankSubscription) {
            this.bankSubscription.unsubscribe();
        }
    }

    private getBankDetails(bankId: string, query: string): void {
        this.bankDetails = [];
        this.loading = true;
        this.bankSubscription = this.bankDetailService
            .getBankDetails(bankId, query)
            .subscribe((response) => {
                this.bankDetails = response.splice(0);
                this.loading = false;
            }, () => {
                this.loading = false;
            });
    }

    private initDropdown(): void {
        setTimeout(() => {
            $('#filter-dropdown').dropdown();
        }, 10);
    }

    private save(): void {
        this.btnLoading = true;
        this.bankDetailService
            .createOrUpdate(this.bankDetail)
            .subscribe(() => {
                $('#bank-modal').modal('hide');
                this.getBankDetails(this.selected.bankId, this.selected.query);
                this.btnLoading = false;
            }, () => {
                this.btnLoading = false;
            });
    }

    private showModal(): void {
        $('#bank-detail-modal')
            .modal({
                closable  : false,
                onApprove : () => {
                    this.save();
                }
            })
            .modal('show');
    }

    private showConfirmationModal(): void {
        $('#bank-detail-confirmation-modal')
            .modal({
                onApprove : () => {
                    this.remove();
                }
            })
            .modal('show');
    }

    public addOrEditBankDetail(bankDetail?: BankDetail): void {
        this.bankDetail = new BankDetail();
        this.bankDetail.bankId = this.selected.bankId;
        if (!bankDetail) {
            this.modalTitle = 'Agregar';
        } else {
            this.modalTitle = 'Editar';
            Object.assign<BankDetail, BankDetail>(this.bankDetail, bankDetail);
        }
        this.showModal();
    }

    public deleteBankDetail(ev: Event, bankDetail: BankDetail): void {
        ev.preventDefault();
        ev.stopPropagation();
        this.bankDetail = new BankDetail();
        Object.assign<BankDetail, BankDetail>(this.bankDetail, bankDetail);
        this.showConfirmationModal();
    }

    private remove(): void {
        this.btnLoading = true;
        this.bankDetailService
            .remove(this.bankDetail.id)
            .subscribe(() => {
                $('#confirmation-modal').modal('hide');
                this.getBankDetails(this.selected.bankId, this.selected.query);
                this.btnLoading = false;
            }, () => {
                this.btnLoading = false;
            });
    }

    public search(): void {
        this.selected = {
            bankId: this.bank,
            query: this.query
        };
        this.getBankDetails(this.selected.bankId, this.selected.query);
        this.showBankDetail = true;
    }

}

interface BankFilter {
    bankId: string;
    query: string;
}
