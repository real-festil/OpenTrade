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

const internalCross = [
    { value: 'Yes', label: 'Yes'},
    { value: 'No', label: 'No'}
];

const agression = [
    { value: 'Low', label: 'Low'},
    { value: 'Medium', label: 'Medium'},
    { value: 'High', label: 'High'},
    { value: 'Highest', label: 'Highest'}
]

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

const twap = () => (
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
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>Price:</p>
                                <Field name="Price">
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
                                <p className={classes.Title}>ValidSeconds:</p>
                                <Field name="validSeconds">
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={numberMask}
                                                name='validSeconds'
                                                placeholder='300'
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
                                <p className={classes.Title}>MinSize:</p>
                                <Field name="minSize">
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={numberMask}
                                                name='minSize'
                                                placeholder='0'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>MaxFloor:</p>
                                <Field name="maxFloor">
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={numberMask}
                                                name='maxFloor'
                                                placeholder='0'
                                                className={inputClasses.Input}
                                                style={meta.error && meta.touched ? {border: '2px solid red'}  : null }
                                                />
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>MaxPov:</p>
                                <Field name="MaxPov">
                                    {({ input, meta}) => (
                                        <>
                                        <MaskedInput {...input}
                                                mask={numberMask}
                                                name='MaxPov'
                                                placeholder='0'
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
                                <p className={classes.Title}>Agression:</p>
                                <Field name="agression"
                                    component={selectComponentWrapper}
                                    validate={required}
                                    options={agression}
                                    inputValue='side'
                                    width='340%'
                                    containerWidth="25%"
                                    >
                                </Field>
                            </div>
                            <div className={classes.WrapTitle}>
                                <p className={classes.Title}>InternalCross:</p>
                                <Field name="internalCross"
                                        component={selectComponentWrapper}
                                        options={internalCross}
                                        inputValue='side'
                                        width='340%'
                                        containerWidth="25%"
                                        >
                                </Field>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ButtonPart}>
                        <Button caption="Send" type='submit'/>
                        <Button caption="Close" btnSelector="btnDisabled"/>
                    </div>
                </form>
            )}
        />
)

export default twap;
