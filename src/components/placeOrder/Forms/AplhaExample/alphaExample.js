import React from 'react';
import Button from '../../../ui/button/button';
import Input from '../../../ui/input/input';
import Select from '../../../ui/select/select';
import classes from '../Manual/manual.module.css';
import inputClasses from '../../../ui/input/input.module.css';
import { Form, Field } from 'react-final-form';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const onSubmit = (value) => {
    console.log(value)
}

const numberMask = createNumberMask({
    prefix: '',
    suffix: ''
})

const required = value => (value ? undefined : 'Required')

const security = [
    { value: 'Server unreachable', label: 'Server unreachable'}
];

function selectComponentWrapper( props ) {
    const {
        input : { name, options, onChange, ...restInput},
        meta,
        ...rest
    } = props;

    return (<Select {...rest}
                    className={classes.Select}
                    options={props.options}
                    name={props.name}
                    changed={onChange}
                    inputValue={props.inputValue}
                    width={props.width}
                    invalid={meta.error && meta.touched}
                    containerWidth={props.containerWidth} />)
}


const alphaExample = ( props ) => (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
                    <div className={classes.SelectPart} >
                        <div className={classes.Row}>
                            <Field name="security"
                                    component={selectComponentWrapper}
                                    validate={required}
                                    options={security}
                                    inputValue='security'
                                    width='100%'
                                    containerWidth="30%"
                                    >
                            </Field>
                            <Field name="account"
                                    component={selectComponentWrapper}
                                    validate={required}
                                    options={security}
                                    inputValue='account'
                                    width='100%'
                                    containerWidth='30%'
                                    >
                            </Field>
                            <Field name="side"
                                    component={selectComponentWrapper}
                                    validate={required}
                                    options={security}
                                    inputValue='side'
                                    width='100%'
                                    containerWidth="20%"
                                    >
                            </Field>
                        </div>
                        <div className={classes.Row}>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>Quantity:</p>
                                <Field name="quantity" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={numberMask}
                                                placeholder='Quantity'
                                                name='quantity'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ButtonPart}>
                        <p></p>
                        <Button caption="Send" type='submit'/>
                        <Button caption="Close" btnSelector="btnDisabled" clicked={props.modalClosed}/>
                    </div>
            </form>
        )}
    />

)

export default alphaExample;
