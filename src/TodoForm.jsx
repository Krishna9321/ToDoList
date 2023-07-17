import { Create } from "@mui/icons-material";
import { Icon, IconButton, InputAdornment, ListItem } from "@mui/material";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

//===========================================================================================================================================

function TodoForm({ AddTodo }) {
    const [text, settext] = useState('');

    const handleChange = (evt) => {
        settext(evt.target.value);
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        if (text)
            AddTodo(text);
        settext("");
    }

    return (
        <ListItem>
            <form onSubmit={handlesubmit}>
                <TextField id="filled-basic"
                    label="Add"
                    variant="filled"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="Create" edge="end" type="submit">
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </form >
        </ListItem>
    );
}

export default TodoForm;
