import React from 'react'
import { parseISO, differenceInMinutes, getTime, differenceInHours, differenceInDays } from 'date-fns';

export const timeCreator = (createdAt) => {
    const date = Date.now()
    return (
        <div>
        {differenceInMinutes(date, getTime(parseISO(`${createdAt}`))) >= 60
        ? <h4>{`${differenceInMinutes(date, getTime(parseISO(`${createdAt}`)))
            - (differenceInHours(date, getTime(parseISO(`${createdAt}`))) * 60)} min`}</h4>
        : differenceInMinutes(date, getTime(parseISO(`${createdAt}`))) < 1
            ? <h4>less than minute</h4>
            : <h4>{`${differenceInMinutes(date, getTime(parseISO(`${createdAt}`)))} min`}</h4>
    }

    {differenceInHours(date, getTime(parseISO(`${createdAt}`))) >= 24 &&
        differenceInHours(date, getTime(parseISO(`${createdAt}`)))
        - (differenceInDays(date, getTime(parseISO(`${createdAt}`))) * 24) > 0
        ?
        <h4>{`${differenceInHours(date, getTime(parseISO(`${createdAt}`)))
            - (differenceInDays(date, getTime(parseISO(`${createdAt}`))) * 24)} hours`}</h4>
        : ''}
    {differenceInHours(date, getTime(parseISO(`${createdAt}`))) < 24
        && differenceInHours(date, getTime(parseISO(`${createdAt}`))) > 0
        ? <h4> {`${differenceInHours(date, getTime(parseISO(`${createdAt}`)))} hours`} </h4>
        : ''}

    {differenceInDays(date, getTime(parseISO(`${createdAt}`))) > 0 ?
        <h4>{`${differenceInDays(date, getTime(parseISO(`${createdAt}`)))} days `}</h4>
        : ''
    }
    </div>
    )
}