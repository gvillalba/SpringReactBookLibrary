import * as React from 'react';
import { FormControl } from 'react-bootstrap';
import { BaseInputProps, ChangeEventsProps } from './input';
import { ReactNode } from 'react';

export interface TextInputProps extends BaseInputProps, ChangeEventsProps {
    placeholder?: string;
    value?: string|number;
    type?: 'text'|'password';
    trailingFieldLabel?: ReactNode;
    disabled?: boolean;
    readOnly?: boolean;
    componentClass?: string;
}

export class TextInput extends React.Component<TextInputProps> {

    static defaultProps = {
        type: 'text',
        componentClass: 'input'
    };

    render() {
        const {id, placeholder, value, onChange, onBlur, type, disabled, readOnly, componentClass } = this.props;

        return (
            <div className={this.getStyle()}>
                <FormControl
                    id={id}
                    type={type}
                    name={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    disabled={disabled}
                    readOnly={readOnly}
                    // componentClass={componentClass}
                />
                {this.renderTrailingFieldLabel()}
            </div>
        );
    }

    private getStyle() {
        const {trailingFieldLabel} = this.props;

        if (trailingFieldLabel) {
            return 'input-with-trailing-field';
        } else {
            return '';
        }
    }

    private renderTrailingFieldLabel() {
        const {trailingFieldLabel} = this.props;

        if (!trailingFieldLabel) {
            return;
        }

        return (
            <span className="input-trailing-label">
                {trailingFieldLabel}
            </span>
        );
    }
}