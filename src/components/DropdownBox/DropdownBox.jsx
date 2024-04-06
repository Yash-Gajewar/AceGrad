import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropdownBox( props ) {

    const handleChange = (event) => {
        props.setInterviewer(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }} className='bg-white'>
                <InputLabel id="demo-simple-select-helper-label">Interviewer</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={props.Interviewer}
                    label="Interviewer"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {
                        props.InterviewerType.map((Interviewer) => (
                            <MenuItem value={Interviewer}>{Interviewer}</MenuItem>
                        ))

                    }
                </Select>
            </FormControl>
        </div>
    );
}