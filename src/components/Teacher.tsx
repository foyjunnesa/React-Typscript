import React from 'react';

type teacherProps = {
    teacherList: {
        firstName: string;
        lastName: string;
    }[];
};
const Teacher = (props: teacherProps) => {
    return (
        <>
            {props.teacherList.map((teacher) => (<h1>{teacher.firstName} {teacher.lastName}</h1>))}
        </>
    );
};

export default Teacher;