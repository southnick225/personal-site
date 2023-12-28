
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})

export class AlertComponent{

    //uses "void" return type(can also return other values/data types) to simply 
    //emit that the button(close) inside the modal was clicked. 
    // "message" property to set the message where this component is being called 
    //  "close" property to emit a click event 

    @Input() message: String = '';
    @Input() title: String = '';
    @Output() close = new EventEmitter<void>()
   
    onClose(){
        this.close.emit();
    }

}