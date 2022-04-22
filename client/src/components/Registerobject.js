import React, { useState, useEffect } from 'react';
import { Formik, Field, Form,ErrorMessage } from "formik";
import * as Yup from "yup";
import  { useNavigate} from "react-router-dom";

const Registerobject = (props) => {
    const [formstatus, setFormstatus] = useState(false)
    let navigate = useNavigate();
    //let { id } = useParams();
    //cambia validaciones de backup al front
    const flag_errors = false;
    const { pelicula, year, director, premio,  flag_edit, onSubmitProp, errors, setErrors} = props 
    useEffect(() => {    
        console.log(errors)
    },[errors]);

    return (
        <div className="Register">
            <Formik          
            initialValues={{
                pelicula:pelicula, 
                year:year,
                director:director,
                premio:premio,
            }}
            validationSchema={ Yup.object().shape({
                //   pelicula: Yup.string()
                //   .min(3,"Movie name too short")
                //   .max(30,"Movie name too long")
                //   .required("Please write your name"),
                //   year: Yup.number()
                //   .min(1920,"Movie Description too short")
                //   .max(2050,"Movie Description too long")
                //   .required("Please write Movie Description"),
                //   director: Yup.string()
                //   .min(3,"Movie Description name too short")
                //   .max(20,"Movie Description name too long")
                //   .required("Please write Movie Description"),

            })}
            onSubmit={(values,{ setSubmitting, resetForm })=>{
                setSubmitting(false);
                onSubmitProp(values)  
                setErrors([])   
                setTimeout(()=>{ 
                    resetForm() 
                    navigate('/') 
                    setFormstatus(true)
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
                                <Form  className="form-group formulario-registro p-3 mb-2 bg-secondary text-white  "  onSubmit={handleSubmit}>

                                    <label htmlFor='pelicula' className="col-sm-12" >Nombre pelicula</label>
                                    <Field className="" onChange={handleChange} onBlur={handleBlur}  id="pelicula" type="text" placeholder={pelicula} name="pelicula" ></Field>
                                    {flag_errors && <ErrorMessage name="pelicula">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>}                                                              
                                
                                    <label htmlFor='year' className="col-sm-12" >Año</label>
                                    <Field className="" onChange={handleChange} onBlur={handleBlur}  id="year" type="number" placeholder={year} name="year" ></Field>
                                    {flag_errors && <ErrorMessage name="year">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>  }
                                                                                            
                                    <label htmlFor='director' className="col-sm-12" >Director</label>
                                    <Field className="" onChange={handleChange} onBlur={handleBlur}  id="director" type="text" placeholder={director} name="director" ></Field>
                                    {flag_errors && <ErrorMessage name="director">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>  }
                                                                                        
                                    <label htmlFor='premio' className="col-sm-12" >Premios</label>
                                    <Field className="" onChange={handleChange} onBlur={handleBlur}  id="premio" type="text" placeholder={premio} name="premio" ></Field>
                                    {flag_errors && <ErrorMessage name="premio">{(msg)=> <p className='error'>{msg}</p>}</ErrorMessage>  }                                                      

                                    <br></br>
                                    { !flag_edit && <button type="submit" class="btn btn-success border border-white"  > Añadir Pelicula </button> }
                                    {  flag_edit &&<button type="submit" class="btn btn-success border border-white"  disabled={Object.values(errors).length>0} > Edit Pelicula</button> }
                        
                                </Form>  
                                {formstatus && <p className="formulario-enviado">formulario enviado</p>}
                            </div>
                        )
                    }}

            </Formik>

            <div className="errores-form">
            </div>
            
        </div>
    );
}

export default Registerobject;
