import { Component, ViewChild, AfterViewInit, AfterViewChecked, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { Customer, Employee, Service, Task } from './app.service';
import notify from 'devextreme/ui/notify';
import { DxFormComponent, DxSelectBoxComponent, DxRadioGroupComponent } from "devextreme-angular";
import { element } from 'protractor';
import data from "devextreme/data/array_store";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [Service]
})
export class AppComponent implements AfterViewInit, OnChanges, OnInit {
  title = "hello \r\n test";
  now: Date = new Date();
    @ViewChild(DxFormComponent) form:DxFormComponent;
    @ViewChild("dxSelectBox") dxSelectBox: DxSelectBoxComponent;
    password = "";
    passwordOptions: any = {
        mode: "password",
        value: this.password
    };
    customer: Customer;
    countries: string[];
    cities: string[];
    maxDate: Date = new Date();
    cityPattern = "^[^0-9]+$";
    namePattern: any = /^[^0-9]+$/;
    phonePattern: any = /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
    phoneRules: any = {
        X: /[02-9]/
    }
    buttonOptions: any = {
        text: "Register",
        type: "success",
        useSubmitBehavior: true
    }
	dataSource: Employee[];
    pattern: any = /^\(\d{3}\) \d{3}-\d{4}$/i;
    passwordComparison = () => {
        return this.form.instance.option("formData").Password;
    };
    checkComparison() {
        return true;
    }
    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }
    constructor(service: Service) {
        this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
        this.countries = service.getCountries();
        setTimeout(() => {
            // this.addTitle()
        }, 500);
        this.cities = service.getCities();
        this.customer = service.getCustomer();
        this.dataSource = service.getEmployees();
        


        this.tasks = service.getTasks();
        this.priorities1 = [
            { text: "Low", color: "grey" },
            { text: "Normal", color: "green" },
            { text: "Urgent", color: "yellow" },
            { text: "High", color: "red" }
        ];
        this.priorities = [
            "Low",
            "Normal",
            "Urgent",
            "High"
        ];
        this.priority = this.priorities[2];
        this.currentData[0] = this.tasks[1].subject;
    }
    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        // this.addTitle()


        this.eventRadioGroup.instance.option("value", this.priorities[0]);
    }
    /* ngAfterViewChecked() : void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        this.addTitle()
    }
    addTitle = ()=>{
        const titleItems: HTMLElement[] = [].slice.call(document.getElementsByClassName("dx-list-item-content"));
        console.log(titleItems)
        titleItems.map(item => item.setAttribute("title", item.innerText))
    } */
    onFormSubmit = function(e) {
        notify({
            message: "You have submitted the form",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
    }
    handelEnter(e){
        console.log(this.form)
        console.log(e);
    }
    handelChange(e){
        console.log(e);
    }

    handelContentReady(e){
        console.log("handelContentReady")
    }
    handelOptionChanged(e){
        console.log("optionChanged")
    }
    handelFocus = ()=>{
        console.log(this);
        console.log(this.dxSelectBox.instance.element())
        console.log("focus")
    }
    handelItemChange(e){
        console.log(e);
    }

    employee = {
        firstName: "John",
        lastName: "Heart",
        email: "jheart@dx-email.com",
        phone: "+1(213) 555-9392"
    }
    /* form_customizeItem(item) {
        if (item.itemType == "simple") {
            item.label = {
                location: "top"
            };
            if (item.dataField === "email" || item.dataField === "phone") {
                item.colSpan = 3;
            }
            if (item.dataField === "phone") {
                item.helpText = "Example: +1 (111) 111-1111";
            }
        }
    } */


    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.data = new data({
            data: this.tasks,
            key: "ID"
        });
    }

    @ViewChild("eventRadioGroup") eventRadioGroup: DxRadioGroupComponent;
    priorities1: any[];
    priorities: any[];
    priority: string;
    tasks: Task[];
    data: any;
    currentData: string[] = [];
    onValueChanged($event) {
        console.log($event)
        this.currentData = [];

        this.tasks.forEach((item, index) => {
            console.log(item.priority)
            if (item.priority == $event.value) {
                this.currentData.push(this.tasks[index].subject);
            }
        });
    }
    radioChange($event){
        console.log($event);
    }


}
