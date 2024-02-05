import { useState, } from "react";
import addressService from "../services/AddressService";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import classNames from "classnames";
import { Form } from "react-bootstrap";

function AddressSearchInput(props:any) {
    console.log('AddressSearchInput', props)
    const { field, form: { touched, errors, }, handleOnChange, label } = props;

    const [options, setOptions] = useState([] as any[]);
    const [isLoading, setIsLoading] = useState(false);

    const fieldKey = field.name;

    const handleOnSearch = async (term: string) => {
        console.log('searching by term', term)
        setIsLoading(true);
        const json = await addressService.search(term);
        console.log('search results', json)
        setIsLoading(false);
        setOptions(json);
    }

    const _handleOnChange = (selected:any) => {
        console.log('handleOnChange', selected)
        if (selected.length > 0) {
            handleOnChange(selected[0]);
        }
    } 

    return (
        <AsyncTypeahead
            id={fieldKey}
            isLoading={isLoading}
            onSearch={handleOnSearch}
            onChange={_handleOnChange}
            labelKey='name'
            minLength={2}
            filterBy={() => true}
            renderMenuItemChildren={(option:any) => {
                console.log('renderMenuItemChildren', option)
                return (
                    <div style={{
                        borderBottom:' 1px solid #EFEFEF',
                        paddingBottom:' 4px',
                    }}>
                        <span style={{
                            fontWeight: '600',
                        }}>{option.name}</span>
                        <div style={{
                                paddingLeft: '10px',
                            }}
                        >
                            <small>
                                {option.street1}
                                <br />
                                {option.street2 &&
                                    <>{option.street2}<br /></>
                                }
                                {option.city}, {option.state} {option.zip}
                            </small>
                        </div>
                    </div>
                );
            }}
            selected={field.value ? [field.value] : []}
            className={classNames('form-control form-control-lg', {
                'is-valid': (touched[fieldKey] && !errors[fieldKey]),
                'is-invalid': (touched[fieldKey] && errors[fieldKey])
            })}
            options={options}
        />
    );
}

export default AddressSearchInput;
