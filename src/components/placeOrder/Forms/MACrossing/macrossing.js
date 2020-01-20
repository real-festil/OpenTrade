import React from 'react';
import Button from '../../../ui/button/button';
import Input from '../../../ui/input/input';
import Select from '../../../ui/select/select';
import classes from '../Manual/manual.module.css';
import inputClasses from '../../../ui/input/input.module.css';
import { Form, Field } from 'react-final-form';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const security = [
    { value: 'Server unreachable', label: 'Server unreachable'}
];

const onSubmit = (value) => {
    console.log(value)
}

const numberMask = createNumberMask({
    prefix: '',
    suffix: ''
})

const priceMask = createNumberMask({
    prefix: '',
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

const macrossing = ( props ) => (
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
                                    inputValue='security 1'
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
                                <p className={classes.Title}>Quantity 1:</p>
                                <Field name="quantity1" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={numberMask}
                                                placeholder='Quantity'
                                                name='quantity1'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>SYMBOL LEG 2:</p>
                                <Field name="symbolLeg2" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={false}
                                                placeholder='Symbol leg 2'
                                                name='symbolLeg2'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>ACCOUNT 2:</p>
                                <Field name="accountInput2" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={false}
                                                placeholder='Account 2'
                                                name='accountInput2'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                        </div>
                        <div className={classes.Row}>
                        <Field name="security2"
                                    component={selectComponentWrapper}
                                    validate={required}
                                    options={security}
                                    inputValue='security 2'
                                    width='100%'
                                    containerWidth="30%"
                                    >
                            </Field>
                            <Field name="account2"
                                    component={selectComponentWrapper}
                                    validate={required}
                                    options={security}
                                    inputValue='account'
                                    width='100%'
                                    containerWidth='30%'
                                    >
                            </Field>
                            <Field name="side2"
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
                                <p className={classes.Title}>Quantity 2:</p>
                                <Field name="quantity2" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={numberMask}
                                                placeholder='Quantity 2'
                                                name='quantity2'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>SYMBOL LEG 3:</p>
                                <Field name="symbolLeg3" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={false}
                                                placeholder='Symbol leg 3'
                                                name='symbolLeg3'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>ACCOUNT 3:</p>
                                <Field name="accountInput3" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                placeholder='Account 3'
                                                mask={false}
                                                name='accountInput3'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                        </div>
                        <div className={classes.Row}>
                        <Field name="security3"
                                    component={selectComponentWrapper}
                                    validate={required}
                                    options={security}
                                    inputValue='security 3'
                                    width='100%'
                                    containerWidth="30%"
                                    >
                            </Field>
                            <Field name="account3"
                                    component={selectComponentWrapper}
                                    validate={required}
                                    options={security}
                                    inputValue='account'
                                    width='100%'
                                    containerWidth='30%'
                                    >
                            </Field>
                            <Field name="side3"
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
                                <p className={classes.Title}>Quantity 3:</p>
                                <Field name="quantity3" validate={required}>
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={numberMask}
                                                placeholder='Quantity 3'
                                                name='quantity3'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>FastMA:</p>
                                <Field name="FastMA">
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={priceMask}
                                                placeholder='FastMA'
                                                name='price'
                                                defaultValue='6'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>SlowMA:</p>
                                <Field name="SlowMA">
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={priceMask}
                                                placeholder='SlwoMA'
                                                name='price'
                                                defaultValue='24'
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
                        <Button caption="Send" type='submit'/>
                        <Button caption="Close" btnSelector="btnDisabled" clicked={props.modalClosed}/>
                    </div>
                </form>
            )}
        />
)

export default macrossing;
