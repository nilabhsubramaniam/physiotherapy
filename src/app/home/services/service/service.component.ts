import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
    serviceList = [
        {
            header: 'Occupational Therapy',
            value: "Optimize Your Independence, Rediscover Your Potential! Our occupational " +
                "therapy services are designed to empower individuals of all ages to " +
                "overcome physical, cognitive, or emotional challenges and achieve their " +
                "full potential in daily life activities. Our dedicated team of " +
                "occupational therapists provides personalized assessments and " +
                "interventions to enhance independence, promote functional skills, and " +
                "improve overall quality of life."
        },
        {
            header: 'Physical Therapy',
            value: 'Revitalize Your Movement, Reclaim Your Life! Our physical therapy ' +
                'services are dedicated to restoring mobility, alleviating pain, and ' +
                'enhancing overall well-being. With a team of skilled and compassionate ' +
                'therapists, we offer personalized treatment plans tailored to your ' +
                'specific needs and goals. Whether you\'re recovering from an injury, ' +
                'managing a chronic condition, or aiming to improve athletic performance, ' +
                'our evidence-based approach utilizes cutting-edge techniques and ' +
                'therapeutic exercises to optimize your recovery journey. Let us guide ' +
                'you towards a stronger, healthier, and more active lifestyle.'
        },
        {
            header: 'SPEECH THERAPY',
            value: 'Enhance Your Communication, Empower Your Life! Our speech therapy ' +
                'services offer personalized care to address speech and language ' +
                'challenges, enabling individuals to communicate effectively and ' +
                'confidently. With a team of experienced speech therapists, we specialize ' +
                'in diagnosing and treating a range of speech disorders, including ' +
                'articulation issues, stuttering, voice disorders, and more. Whether ' +
                'you\'re recovering from injury, seeking to improve communication skills, ' +
                'or supporting a loved one, our tailored approach ensures progress and ' +
                'success. Elevate your speech and embrace a brighter future with our ' +
                'comprehensive speech therapy services.'
        },
        {
            header: 'CHHA',
            value: 'Empowering Care, Enhancing Lives! Our Certified Home Health Aide (CHHA) ' +
                'services are dedicated to providing compassionate and personalized care ' +
                'in the comfort of your own home. Our team of trained professionals ' +
                'offers assistance with activities of daily living, personal hygiene, and ' +
                'more, tailored to meet your unique needs and preferences. Whether you\'re ' +
                'recovering from surgery, managing a chronic illness, or in need of ' +
                'companionship and support, our CHHAs are here to ensure your comfort, ' +
                'safety, and well-being. Experience the convenience and peace of mind ' +
                'that comes with expert care delivered right to your doorstep. Let us ' +
                'support you on your journey to improved health and independence.'
        },
        {
            header: 'NURSING',
            value: 'Compassionate Care, Expert Support! Our nursing services are dedicated ' +
                'to providing high-quality, personalized care to individuals in need of ' +
                'medical assistance and support. With a team of experienced and ' +
                'compassionate nurses, we offer a wide range of services including wound ' +
                'care, medication management, post-operative care, and health monitoring. ' +
                'Whether you\'re recovering from an illness, managing a chronic condition, ' +
                'or in need of skilled nursing care, our team is committed to ensuring ' +
                'your comfort, safety, and well-being. Trust us to deliver expert nursing ' +
                'care with empathy and professionalism, so you can focus on your recovery ' +
                'and overall health. Experience the difference that expert nursing care ' +
                'can make in your life.'
        }



    ];

    constructor(private router: Router) {
    }

    ngOnInit(): void {

        this.router.events.subscribe((event:any) => { 
            if (!(event instanceof NavigationEnd)) { 
                return; 
            } 
            window.scrollTo(0, 0) 
        }); 
    }

}
