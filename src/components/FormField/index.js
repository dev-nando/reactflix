import React from 'react';

function FormField({ labelText, type, as, value, name, onChange }){
    return (
        <div>
            <label>
                {labelText}: 
                <input
                    type={type}
                    as={as}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </label>
        </div>
    );
}

export default FormField;
