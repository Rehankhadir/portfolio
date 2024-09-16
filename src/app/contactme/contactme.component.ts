import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'; 

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.scss']
})
export class ContactmeComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // console.log(this.contactForm.value);
      const formData = this.contactForm.value;
      this.sendEmail(formData);
      this.contactForm.reset();
      // Handle form submission logic here (e.g., send form data to a server)
      alert('Form submitted successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill all fields correctly.');
    }
  }

  sendEmail(formData: any) {
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs
      .send('service_j3l88oe', 'template_8vn2y2u', emailParams, 'M-R0QWoIVFrkkH08-') // Replace with your EmailJS credentials
      .then(
        (response) => {
          console.log('Email sent successfully', response.status, response.text);
          alert('Thank you for your message!');
        },
        (error) => {
          console.error('Error sending email', error);
          alert('Failed to send the message. Please try again.');
        }
      );
  }

}
