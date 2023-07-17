import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box, Typography } from '@mui/material';


//===========================================================================================================================================

const initialdata = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}

function TodoList() {
    const [todos, settodos] = useState(initialdata);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const remove = (id) => {
        settodos(todos => {
            return todos.filter(t => t.id !== id);
        });
    };

    const toggle = (id) => {
        settodos(todos => {
            return todos.map(todo => {
                if (todo.id === id)
                    return { ...todo, done: !todo.done }
                else
                    return todo;
            });
        });
    }

    const AddTodo = (text) => {
        settodos(todos => {
            return [
                ...todos,
                { id: crypto.randomUUID(), text: text, done: false }
            ];
        });
    }

    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                alignItems: 'center',
            }
        }>
            <Typography variant="" component="h1">Todo List</Typography><br/>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map(todo => {
                    return <TodoItem todo={todo} key={todo.id} remove={() => remove(todo.id)} toggle={() => toggle(todo.id)} />
                })}
                <TodoForm AddTodo={AddTodo} />
            </List>
        </Box>
    );
}

export default TodoList;


//===========================================================================================================================================
