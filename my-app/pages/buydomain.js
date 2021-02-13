import { useRouter } from 'next/router'
import React from "react";
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css'
export default function Buy() {

    const router = useRouter();
    const { domain } = router.query;


    const { register, handleSubmit } = useForm();


    const onSubmit = data => ab(data);
    async function ab(data) {
        const res = await fetch('/api/buydomain?site=' + domain, { body: JSON.stringify(data), method: 'POST', }).then(response => response.json())
            .then(data => {
                if (data.error == 'no')
                    console.log('done')
                console.log(data.domain)
                if (data.error == 'yes')
                    console.log('error')
            });
    }
    if (domain != null)
        return (
            <div className={styles.container}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p>Contact Admin</p>
                        address1 <input name="contactAdmin-adress1" ref={register} />
                        address2 <input name="contactAdmin-adress2" ref={register} />
                        city <input name="contactAdmin-city" ref={register} />
                        country <input name="contactAdmin-country" ref={register} />
                        postal code <input name="contactAdmin-postalcode" ref={register} />
                        state   <input name="contactAdmin-state" ref={register} />
                    </div>
                    <div>
                        email <input name="contactAdmin-email" ref={register} />
                    fax <input name="contactAdmin-fax" ref={register} />
                    jobTitle <input name="contactAdmin-jobTitle" ref={register} />
                    nameFirst <input name="contactAdmin-nameFirst" ref={register} />
                        <div>
                            nameLast<input name="contactAdmin-nameLast" ref={register} />
                    nameMiddle   <input name="contactAdmin-nameMiddle" ref={register} />
                    organization<input name="contactAdmin-organization" ref={register} />
                    phone   <input name="contactAdmin-phone" ref={register} />
                        </div>
                    </div>

                    <div>
                        <p>contactBilling</p>
                        address1 <input name="contactBilling-adress1" ref={register} />
                        address2 <input name="contactBilling-adress2" ref={register} />
                        city <input name="contactBilling-city" ref={register} />
                        country <input name="contactBilling-country" ref={register} />
                        postal code <input name="contactBilling-postalcode" ref={register} />
                        state   <input name="contactBilling-state" ref={register} />
                    </div>
                    <div>
                        email <input name="contactBilling-email" ref={register} />
                    fax <input name="contactBilling-fax" ref={register} />
                    jobTitle <input name="contactBilling-jobTitle" ref={register} />
                    nameFirst <input name="contactBilling-nameFirst" ref={register} />
                        <div>
                            nameLast<input name="contactBilling-nameLast" ref={register} />
                    nameMiddle   <input name="contactBilling-nameMiddle" ref={register} />
                    organization<input name="contactBilling-organization" ref={register} />
                    phone   <input name="contactBilling-phone" ref={register} />
                        </div>
                    </div>
                    <div>
                        <p>contactRegistrant</p>
                        address1 <input name="contactRegistrant-adress1" ref={register} />
                        address2 <input name="contactRegistrant-adress2" ref={register} />
                        city <input name="contactRegistrant-city" ref={register} />
                        country <input name="contactRegistrant-country" ref={register} />
                        postal code <input name="contactRegistrant-postalcode" ref={register} />
                        state   <input name="contactRegistrant-state" ref={register} />
                    </div>
                    <div>
                        email <input name="contactRegistrant-email" ref={register} />
                    fax <input name="contactRegistrant-fax" ref={register} />
                    jobTitle <input name="contactRegistrant-jobTitle" ref={register} />
                    nameFirst <input name="contactRegistrant-nameFirst" ref={register} />
                        <div>
                            nameLast<input name="contactRegistrant-nameLast" ref={register} />
                    nameMiddle   <input name="contactRegistrant-nameMiddle" ref={register} />
                    organization<input name="contactRegistrant-organization" ref={register} />
                    phone   <input name="contactRegistrant-phone" ref={register} />
                        </div>
                    </div>
                    <div>
                        <p>contactTech</p>
                        address1 <input name="contactTech-adress1" ref={register} />
                        address2 <input name="contactTech-adress2" ref={register} />
                        city <input name="contactTech-city" ref={register} />
                        country <input name="contactTech-country" ref={register} />
                        postal code <input name="contactTech-postalcode" ref={register} />
                        state   <input name="contactTech-state" ref={register} />
                    </div>
                    <div>
                        email <input name="contactTech-email" ref={register} />
                    fax <input name="contactTech-fax" ref={register} />
                    jobTitle <input name="contactTech-jobTitle" ref={register} />
                    nameFirst <input name="contactTech-nameFirst" ref={register} />
                        <div>
                            nameLast<input name="contactTech-nameLast" ref={register} />
                    nameMiddle   <input name="contactTech-nameMiddle" ref={register} />
                    organization<input name="contactTech-organization" ref={register} />
                    phone   <input name="contactBilling-phone" ref={register} />
                        </div>
                    </div>





                    <input type="submit" />




                </form>
            </div>
        );
    else {
        return (
            <p>Not Valid Page</p>

        )
    }

}
