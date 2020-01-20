import React from 'react';
import Button from '../../../ui/button/button';
import Input from '../../../ui/input/input';
import Select from '../../../ui/select/select';
import classes from './manual.module.css';
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

const priceMask = createNumberMask({
    prefix: '$',
    suffix: '',
    allowDecimal: true,
    decimalLimit: 5
})

const required = value => (value ? undefined : 'Required')

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

const security = [
    { value: 'Server unreachable', label: 'Server unreachable'}
];

const type = [
    { value: 'Limit', label: 'Limit'},
    { value: 'Market', label: 'Market'},
    { value: 'Shop', label: 'Shop'},
    { value: 'Stop Limit', label: 'Stop Limit'},
    { value: 'OTC', label: 'OTC'}
];

const timeInForce = [
    { value: 'Day', label: 'Day'},
    { value: 'IOC', label: 'IOC'},
    { value: 'OPG', label: 'OPG'},
    { value: 'FOK', label: 'FOK'}
]

const manual = ( props ) => (
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
                                <p className={classes.Title}>Type:</p>
                                <Field name="type"
                                    component={selectComponentWrapper}
                                    options={type}
                                    width='340%'
                                    containerWidth="25%"
                                    ></Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>TimeInForce:</p>
                                <Field name="timeInForce"
                                    component={selectComponentWrapper}
                                    options={timeInForce}
                                    width='340%'
                                    containerWidth="25%"
                                    ></Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>Quantity:</p>
                                <Field name="quantity">
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
                        <div className={classes.Row}>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>Price:</p>
                                <Field name="Price" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={priceMask}
                                                placeholder='Price'
                                                name='price'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>Stop price:</p>
                                <Field name="stopPrice">
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={priceMask}
                                                placeholder='Stop Price'
                                                name='stopPrice'
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
                        <Button caption="Send" type="submit"/>
                        <Button caption="Close" btnSelector="btnDisabled" clicked={props.modalClosed}/>
                    </div>
                </form>
            )}
        />
)

export default manual;
