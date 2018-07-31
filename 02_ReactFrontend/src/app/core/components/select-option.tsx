import * as React from 'react';
import { zero, NON_BREAKING_SPACE } from './constants';

interface SelectOptionProps {
    id: string;
    title: string;
    data: Array<any>;
    onChange: any;
    visible?: boolean;
}

export class SelectOption extends React.Component<SelectOptionProps> {

    constructor(props: SelectOptionProps) {
        super(props);
    }

    render() {
        if (this.props.data === undefined) {
            return '';
        }

        if (this.props.visible === false) {
            return '';
        }

        const data: Array<number> = this.props.data;

        return (
            <select
                id={this.props.id}
                title={this.props.title}
                onChange={this.props.onChange}
            >
                <option value={zero}>{NON_BREAKING_SPACE}</option>
                {data.map(record => (
                    <option value={record}>{record}</option>
                ))}
            </select>
        );
    }
}