import * as React from 'react';

export interface BaseInputProps {
    id: string;
}

export type ChangeEvent = (e: React.ChangeEvent<any>) => void;

export type ChangeEventWithFieldName = (field: string, value: any) => void;

export type BlurEventWithFieldName = (field: string, isTouched?: boolean | undefined) => void;

export interface ChangeEventsProps {
    onChange?: ChangeEvent;
    onBlur?: (e: any) => void;
}

export interface ChangeEventsWithFieldNamesProps {
    onChange?: ChangeEventWithFieldName;
    onBlur?: BlurEventWithFieldName;
}