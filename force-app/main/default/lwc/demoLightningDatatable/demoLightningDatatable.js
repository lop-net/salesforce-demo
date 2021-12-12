import { LightningElement, track } from 'lwc';



const actions = [
    {},
];

const columns = [
    {label: 'Creation Date', fieldName: 'transactionDate', type: 'date-local', typeAttributes:{ month: "2-digit", day: "2-digit" }, hideDefaultActions: true},
    {label: 'CTN', fieldName: 'subscriberNumber', type: 'phone', hideDefaultActions: true,  typeAttributes: { disabled: true },},
    {label: 'Bill Date', fieldName: 'nextBillDate', type: 'date-local', typeAttributes: { month: "2-digit", day: "2-digit" }, hideDefaultActions: true},
    {label: 'BAN/CPID', fieldName: 'entSeqNo', hideDefaultActions: true},
    {label: 'Code', fieldName: 'transactionCode', hideDefaultActions: true},
    {label: 'Description', fieldName: 'description', hideDefaultActions: true},
    {label: 'Amount', fieldName: 'amount', type: 'currency', hideDefaultActions: true},
    {label: 'Tax', fieldName: 'taxAmount', type: 'currency', hideDefaultActions: true},
    {label: 'Total', fieldName: 'totalAmount', type: 'currency', hideDefaultActions: true},
    {label: 'Type', fieldName: 'type', hideDefaultActions: true},
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
]

const SAMPLE_DATA = {
    "accountNumber": "325310161",
    "accountType": "wireless",
    "pendingAdjCredits": [
        {
            "transactionType": "OTC",
            "transactionCode": "PAFT",
            "description": "MANUAL_2021911612_WVOO2V4F,139D8C3F-28F4-43A9-9964-DD9EA51F10EE",
            "transactionDate": "2021-09-01",
            "nextBillDate": "2021-11-05",
            "subscriberNumber": "2145385080",
            "amount": "5.00",
            "taxAmount": "0.00",
            "totalAmount": "5.00",
            "balanceImpacting": false,
            "entSeqNo": "39010074020",
            "type": "Charge"
        },
        {
            "transactionType": "OTC",
            "transactionCode": "A4RR29",
            "description": "MANUAL_20219151638_9PPHFGV,389FFDED-1820-438F-B30D-F19146D7D687",
            "transactionDate": "2021-09-16",
            "nextBillDate": "2021-11-05",
            "subscriberNumber": "2145385080",
            "amount": "29.00",
            "taxAmount": "2.39",
            "totalAmount": "31.39",
            "balanceImpacting": false,
            "entSeqNo": "39010294812",
            "type": "Charge"
        },
        {
            "transactionType": "OTC",
            "transactionCode": "A4RR29",
            "description": "MANUAL_20219151638_9PPHFGV,71F3E117-0792-4D61-A8FF-2B54A17EA3B7",
            "transactionDate": "2021-09-16",
            "nextBillDate": "2021-11-05",
            "subscriberNumber": "2145385080",
            "amount": "29.00",
            "taxAmount": "2.39",
            "totalAmount": "31.39",
            "balanceImpacting": false,
            "entSeqNo": "39010294817",
            "type": "Charge"
        }
    ]
};

export default class DemoLightningDatatable extends LightningElement {

    columns = columns;
    data = SAMPLE_DATA.pendingAdjCredits;
    
    @track accountNumber;
    @track accountType;

    connectedCallback() {
        console.log('This is fired when the component is connected to.');

        this.accountNumber = SAMPLE_DATA.accountNumber;
        this.accountType = SAMPLE_DATA.accountType;
    }

    renderedCallback() {
        console.log('This is fired when the component is rendered. (can be more than once.');
    }

    handleRowAction(event) {}
}
