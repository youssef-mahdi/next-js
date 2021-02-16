import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import React from "react";
import styles from '../styles/Home.module.css'
import { Alert } from 'react-bootstrap';

export default function Buy() {
       (function () {
        ('[data-toggle="tooltip"]').tooltip()
      })
    const phonepattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im ;
    const emailpattern = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    const router = useRouter();
    const { domain } = router.query;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => fetchdata(data);
    async function fetchdata(data) {
    await fetch('/api/buydomain?site=' + domain, { body: JSON.stringify(data), method: 'POST', }).then(response => response.json())
            .then(datacollected => {
                if (datacollected.error === process.env.fail)
                    console.log('done')
                if (datacollected.error === process.env.success)
                    console.log('error')
            });
    }

    if (domain != null)
        return (
            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="myform">
                        <div className="titlebox"> Contact Admin </div>
                        <div className="container formarrange">
                            <div className="row ">
                                <div className="  col-4 d-flex justify-content-between my-2">Address One:<input name="contactAdminadress1" ref={register({required: true, minLength: 3})} /> 
                                  { errors.contactAdminadress1 && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                  } </div>
                                <div className="  col-4 d-flex justify-content-between my-2 ">Address Two:<input name="contactAdmin-adress2" ref={register} /> </div>
                                <div className="  col-4 d-flex justify-content-between my-2 ">City:<input name="contactAdmincity" ref={register({required: true, minLength: 3})} /> 
                                { errors.contactAdmincity && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                } </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Country:<input name="contactAdmincountry" ref={register({required: true, minLength: 1})} /> 
                                { errors.contactAdmincountry && <p data-toggle="tooltip" data-placement="top" title="Example : US , LB">!</p>
                                }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Postal Code:<input name="contactAdminpostalcode" ref={register({required: true, minLength: 5})} /> 
                                { errors.contactAdminpostalcode &&<p data-toggle="tooltip" data-placement="top" title="Example: 17723">!</p>
                                }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">State:<input name="contactAdminstate" ref={register({required: true, minLength: 3})} />
                                { errors.contactAdminstate && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                }  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Email:<input name="contactAdminemail" id="email"
                                 ref={register({required: true, minLength: 1,pattern: emailpattern})} />  
                                 { errors.contactAdminemail && <p data-toggle="tooltip" data-placement="top" title="user@example.com">!</p>
                                 }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Fax:<input name="contactAdmin-fax" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Job Title:<input name="contactAdmin-jobTitle" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name First:<input name="contactAdminnameFirst" ref={register({required: true, minLength: 3})} /> 
                                { errors.contactAdminnameFirst && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                } 
                                 </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name Last:<input name="contactAdminnameLast" ref={register({required: true, minLength: 3})    } />   
                                { errors.contactAdminnameLast && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                }  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name Middle:<input name="contactAdmin-nameMiddle" ref={register} />   </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Organization:<input name="contactAdmin-organization" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Phone:<input name="contactAdminphone" ref={register({required: true, minLength: 3,pattern: phonepattern })} /> { errors.contactAdminphone && <p data-toggle="tooltip" data-placement="top" title="+96101223344">!</p>
                                }   </div>
                            </div>
                        </div>
                    </div>
                    <div className="myform my-3">
                        <div className="titlebox"> Contact Billing </div>
                        <div className="container formarrange">
                        <div className="row ">
                                <div className="  col-4 d-flex justify-content-between my-2">Address One:<input name="contactBillingadress1" ref={register({required: true, minLength: 3})} /> 
                                  { errors.contactBillingadress1 && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                  } </div>
                                <div className="  col-4 d-flex justify-content-between my-2 ">Address Two:<input name="contactBilling-adress2" ref={register} /> </div>
                                <div className="  col-4 d-flex justify-content-between my-2 ">City:<input name="contactBillingcity" ref={register({required: true, minLength: 3})} /> 
                                { errors.contactBillingcity && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                } </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Country:<input name="contactBillingcountry" ref={register({required: true, minLength: 1})} /> 
                                { errors.contactBillingcountry && <p data-toggle="tooltip" data-placement="top" title="Example : US , LB">!</p>
                                }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Postal Code:<input name="contactBillingpostalcode" ref={register({required: true, minLength: 5})} /> 
                                { errors.contactBillingpostalcode &&<p data-toggle="tooltip" data-placement="top" title="Example: 17723">!</p>
                                }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">State:<input name="contactBillingstate" ref={register({required: true, minLength: 3})} />
                                { errors.contactBillingstate && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                }  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Email:<input name="contactBillingemail" id="email" ref={register({required: true, minLength: 1,pattern:emailpattern    })} />  
                                 { errors.contactBillingemail && <p data-toggle="tooltip" data-placement="top" title="user@example.com">!</p>
                                 }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Fax:<input name="contactBilling-fax" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Job Title:<input name="contactBilling-jobTitle" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name First:<input name="contactBillingnameFirst" ref={register({required: true, minLength: 3})} /> 
                                { errors.contactBillingnameFirst && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                } 
                                 </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name Last:<input name="contactBillingnameLast" ref={register({required: true, minLength: 3})    } />   
                                { errors.contactBillingnameLast && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                }  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name Middle:<input name="contactBilling-nameMiddle" ref={register} />   </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Organization:<input name="contactBilling-organization" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Phone:<input name="contactBillingphone" ref={register({required: true, minLength: 3,pattern:phonepattern })} /> { errors.contactBillingphone && <p data-toggle="tooltip" data-placement="top" title="+96101223344">!</p>
                                }   </div>
                            </div>
                        </div>
                    </div>
                    <div className="myform my-3">
                        <div className="titlebox"> Contact Registrant </div>
                        <div className="container formarrange">
                        <div className="row ">
                                <div className="  col-4 d-flex justify-content-between my-2">Address One:<input name="contactRegistrantadress1" ref={register({required: true, minLength: 3})} /> 
                                  { errors.contactRegistrantadress1 && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                  } </div>
                                <div className="  col-4 d-flex justify-content-between my-2 ">Address Two:<input name="contactRegistrant-adress2" ref={register} /> </div>
                                <div className="  col-4 d-flex justify-content-between my-2 ">City:<input name="contactRegistrantcity" ref={register({required: true, minLength: 3})} /> 
                                { errors.contactRegistrantcity && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                } </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Country:<input name="contactRegistrantcountry" ref={register({required: true, minLength: 1})} /> 
                                { errors.contactRegistrantcountry && <p data-toggle="tooltip" data-placement="top" title="Example : US , LB">!</p>
                                }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Postal Code:<input name="contactRegistrantpostalcode" ref={register({required: true, minLength: 5})} /> 
                                { errors.contactRegistrantpostalcode &&<p data-toggle="tooltip" data-placement="top" title="Example: 17723">!</p>
                                }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">State:<input name="contactRegistrantstate" ref={register({required: true, minLength: 3})} />
                                { errors.contactRegistrantstate && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                }  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Email:<input name="contactRegistrantemail" id="email" ref={register({required: true, minLength: 1,pattern:emailpattern    })} />  
                                 { errors.contactRegistrantemail && <p data-toggle="tooltip" data-placement="top" title="user@example.com">!</p>
                                 }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Fax:<input name="contactRegistrant-fax" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Job Title:<input name="contactRegistrant-jobTitle" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name First:<input name="contactRegistrantnameFirst" ref={register({required: true, minLength: 3})} /> 
                                { errors.contactRegistrantnameFirst && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                } 
                                 </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name Last:<input name="contactRegistrantnameLast" ref={register({required: true, minLength: 3})    } />   
                                { errors.contactRegistrantnameLast && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                }  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name Middle:<input name="contactRegistrant-nameMiddle" ref={register} />   </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Organization:<input name="contactRegistrant-organization" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Phone:<input name="contactRegistrantphone" ref={register({required: true, minLength: 3,pattern: phonepattern  })} /> 
                                { errors.contactRegistrantphone && <p data-toggle="tooltip" data-placement="top" title="+96101223344">!</p>
                                }   </div>
                            </div>
                        </div>
                    </div>
                    <div className="myform my-3">
                        <div className="titlebox"> Contact Tech </div>
                        <div className="container formarrange">
                        <div className="row ">
                                <div className="  col-4 d-flex justify-content-between my-2">Address One:<input name="contactTechadress1" ref={register({required: true, minLength: 3})} /> 
                                  { errors.contactTechadress1 && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                  } </div>
                                <div className="  col-4 d-flex justify-content-between my-2 ">Address Two:<input name="contactTech-adress2" ref={register} /> </div>
                                <div className="  col-4 d-flex justify-content-between my-2 ">City:<input name="contactTechcity" ref={register({required: true, minLength: 3})} /> 
                                { errors.contactTechcity && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                } </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Country:<input name="contactTechcountry" ref={register({required: true, minLength: 1})} /> 
                                { errors.contactTechcountry && <p data-toggle="tooltip" data-placement="top" title="Example : US , LB">!</p>
                                }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Postal Code:<input name="contactTechpostalcode" ref={register({required: true, minLength: 5})} /> 
                                { errors.contactTechpostalcode &&<p data-toggle="tooltip" data-placement="top" title="Example: 17723">!</p>
                                }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">State:<input name="contactTechstate" ref={register({required: true, minLength: 3})} />
                                { errors.contactTechstate && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                }  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Email:<input name="contactTechemail" id="email" ref={register({required: true, minLength: 1,pattern:emailpattern    })} />  
                                 { errors.contactTechemail && <p data-toggle="tooltip" data-placement="top" title="user@example.com">!</p>
                                 }
                                </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Fax:<input name="contactTech-fax" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Job Title:<input name="contactTech-jobTitle" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name First:<input name="contactTechnameFirst" ref={register({required: true, minLength: 3})} /> 
                                { errors.contactTechnameFirst && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                } 
                                 </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name Last:<input name="contactTechnameLast" ref={register({required: true, minLength: 3})    } />   
                                { errors.contactTechnameLast && <p data-toggle="tooltip" data-placement="top" title="Required Input">!</p>
                                }  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Name Middle:<input name="contactTech-nameMiddle" ref={register} />   </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Organization:<input name="contactTech-organization" ref={register} />  </div>
                                <div className="  col-4 d-flex justify-content-between my-2">Phone:<input name="contactTechphone" ref={register({required: true, minLength: 3,pattern:phonepattern  })} /> { errors.contactRegistrantphone && <p data-toggle="tooltip" data-placement="top" title="+96101223344">!</p>
                                }   </div>
                            </div>
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
