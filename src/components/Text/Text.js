import React from 'react';
 import { useFormik } from 'formik';
 import {Typography,Container,RadioGroup,FormControlLabel,FormControl,FormLabel} from '@material-ui/core';
 const Text = ({question}) => {
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
     initialValues: {
       answer: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
      console.log(question);
   return (
        <FormControl component="fieldset">
      
               <Typography variant="h4" component="h2">
   {question.title}<span style={{marginLeft:'25px'}}>{question.weight} Marks</span>
</Typography>
     <form onSubmit={formik.handleSubmit}>
       <textarea rows="5" cols="100"
         id="answer"
         name="answer"
         type="answer"
         onChange={formik.handleChange}
         value={formik.values.email}
       />

     </form>
     </FormControl>
   );
 };
 export default Text;