import React, { useState, useEffect } from 'react';
import { Formik, Field, Form,ErrorMessage } from "formik";
import * as Yup from "yup";
import  { useNavigate} from "react-router-dom";
import '../App.css';

const Registerobject = (props) => {

    const [formstatus, setFormstatus] = useState(false)
    

    let navigate = useNavigate();
    //let { id } = useParams();
    //cambia validaciones de backup al front
    const flag_errors = false;
    const { pirateName, image, numberTreassures, piratePhrase, crewPosition, pedLeg, eyePatch, flag_edit, hookHand, onSubmitProp, user} = props 
    useEffect(() => {  
        if(!user){
            navigate("/registro");
        }
        else{
            
        }     
    },[]);



    return (
        <div className="Register">
            <Formik          
            initialValues={{
                pirateName:pirateName, 
                image:image, 
                numberTreassures:numberTreassures,
                piratePhrase:piratePhrase,
                crewPosition:crewPosition,
                pedLeg:pedLeg,
                eyePatch:eyePatch,
                hookHand:hookHand,
                
            }}
            validationSchema={ Yup.object().shape({
                //    pirateName: Yup.string()
                //    .min(3,"Pirate name too short")
                //    .max(30,"Pirate name too long")
                //    .required("Please write your name"),
                //    image: Yup.string()
                //    .required("Please write your url image"),                
                //    numberTreassures: Yup.number()
                //    .min(1,"Treassure Description too short")
                //    .required("Please write treassure number"),
                //    piratePhrase: Yup.string()
                //    .min(3,"Pirate Phrase Description name too short")
                //    .required("Please write Pirate Phrase"),
                //    crewPosition: Yup.string()
                //    .min(3,"Crew position  too short")
                //    .required("Please write crew position"),
                //    pedLeg:Yup.boolean(),
                //    eyePatch:Yup.boolean(),
                //    hookHand:Yup.boolean()

            })}
            onSubmit={(values,{ setSubmitting, resetForm })=>{
                setSubmitting(false);
                onSubmitProp(values)  
                // navigate('/') 
                setFormstatus(true)
                setTimeout(()=>{ 
                    resetForm() 
                }, 10000)
            }}
            >
            {({errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    })=>{
                        return(
                            <div  className="ventana-formulario-data" >
                                <Form  className="form-group "  onSubmit={handleSubmit}>

                                      <div className="row form-divitions justify-content-center ">
                                        <div className="col-6 ">

                                            <label htmlFor='pirateName' className="col-sm-12" >Pirate Name</label>
                                            <Field className="" onChange={handleChange} onBlur={handleBlur}  id="pirateName" type="text" placeholder={pirateName} name="pirateName" ></Field>
                                            {flag_errors && <ErrorMessage name="pirateName">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              

                                            <label htmlFor='image' className="col-sm-12" >Image URL:</label>
                                            <Field className="" onChange={handleChange} onBlur={handleBlur}  id="image" type="text" placeholder={image} name="image" ></Field>
                                            {flag_errors && <ErrorMessage name="image">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              
                                        
                                            <label htmlFor='numberTreassures' className="col-sm-12" ># of Teasure Chest: </label>
                                            <Field className="" onChange={handleChange} onBlur={handleBlur}  id="numberTreassures" type="number" placeholder={numberTreassures} name="numberTreassures" ></Field>
                                            {flag_errors && <ErrorMessage name="numberTreassures">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>  }
                                                                                                    
                                            <label htmlFor='piratePhrase' className="col-sm-12" >Pirate Catch Frase</label>
                                            <Field className="" onChange={handleChange} onBlur={handleBlur}  id="piratePhrase" type="text" placeholder={piratePhrase} name="piratePhrase" ></Field>
                                            {flag_errors && <ErrorMessage name="piratePhrase">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>  }
                                                                                                
        
                                        </div>

                                        <div className="col-6 " >
                                                <label htmlFor="crewPosition" className="row " >Crew Position</label>
                                                <Field className="form-select row align-items-end" id='crewPosition' type="text" as='select' name='crewPosition'>
                                                    <option value="First Mate">First Mate</option>
                                                    <option value="Quarter Master">Quarter Master</option>
                                                    <option value="Boatswaim">Boatswaim</option>
                                                    <option value="Powder Monkey">Powder Monkey</option>
                                                    <option value="Captain">Captain</option>
                                                </Field>

                                                <div class="form-check">
                                                    <Field class="form-check-input" id="pedLeg" type="checkbox" name="pedLeg" />
                                                    <label class="form-check-label" htmlFor='pedLeg'>pedLeg</label>
                                                    {errors.pedLeg && touched.pedLeg && <p className='error'>{errors.pedLeg} </p>}
                                                </div>

                                                <div class="form-check">
                                                    <Field class="form-check-input" id="eyePatch" type="checkbox" name="eyePatch" />
                                                    <label class="form-check-label" htmlFor='eyePatch'>eyePatch</label>
                                                    {errors.eyePatch && touched.eyePatch && <p className='error'>{errors.eyePatch} </p>}
                                                </div>

                                                <div class="form-check">
                                                    <Field class="form-check-input" id="hookHand" type="checkbox" name="hookHand" />
                                                    <label class="form-check-label" htmlFor='hookHand'>hookHand</label>
                                                    {errors.hookHand && touched.hookHand && <p className='error'>{errors.hookHand} </p>}
                                                    
                                                </div>
                                                { !flag_edit && <button type="submit" className="button_color border-white"  > Add Pirate </button> }
                                        </div>
                                    </div>
                                    
                                    <br></br>
                                    
                        
                                </Form>  
                            </div>
                        )
                    }}

            </Formik>

            <div className="errores-form">
            </div>
                    {formstatus && <p className="formulario-enviado">formulario enviado</p>}
            
        </div>
    );
}

export default Registerobject;
