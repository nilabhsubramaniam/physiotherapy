

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
    contactForm!: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router ) {
        this.createForm();
       
    }

    ngOnInit(): void {

        this.router.events.subscribe((event:any) => { 
            if (!(event instanceof NavigationEnd)) { 
                return; 
            } 
            window.scrollTo(0, 0) 
        }); 
    
    }

    createForm() {
        this.contactForm = this.fb.group({
            full_name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone_number: ['', Validators.required],
            address: ['', Validators.required]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            const formData = new FormData();
            formData.append('entry.1234567890', this.contactForm.value.full_name);
            formData.append('entry.0987654321', this.contactForm.value.email);
            formData.append('entry.1357902468', this.contactForm.value.phone_number);
            formData.append('entry.2468013579', this.contactForm.value.address);

            // Change the URL to your Google Form URL

            const googleFormsUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe-IkDWArUn-wlny4yAWxXjPRbz2EWhQAMqzWuCwE0SLss-4A/viewform?usp=sf_link';

            this.http.post(googleFormsUrl, formData).subscribe(
                response => {
                    console.log('Form submission successful:', response);
                    // Handle success, maybe show a success message to the user
                },
                error => {
                    console.error('Form submission error:', error);
                    // Handle error, maybe show an error message to the user
                }
            );
        }
    }
}
