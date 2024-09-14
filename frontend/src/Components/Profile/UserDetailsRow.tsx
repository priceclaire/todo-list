import { CheckIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Text, IconButton, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

type Props = {
    field: string;
    value: string;
    username: string;
};

const UserDetailsRow = ({field, value, username}: Props) => {
    const [updateField, setUpdateField] = useState(false);
    const [valueState, setValueState] = useState(value);

    const onChange = (e: any) => {
        setValueState(e.target.value);
    };

    const onClickEdit = () => {
        setUpdateField(!updateField);
    };

    const onClickCheck = () => {
        const token = localStorage.getItem("token");

        console.log("TOKEN", token);
        console.log("USERNAME", username);

        setUpdateField(!updateField);

        axios
            .post("http://localhost:3025/auth/change-account-detail", {
                field,
                value: valueState,
                username,
            }, { headers: { Authorization: "Bearer ${token}" } }
        )
        .then((response) => {
            console.log("RESPONSE", response.data);
        })
    };

    return (
        <Box display="flex" gap={2}>
            <Text flex={1} lineHeight="32px">{field}:</Text>
            {updateField ? (
                <Input value={valueState} flex={1} h="32px" onChange={onChange} />
                ) : (
                <Text flex={1} lineHeight="32px">{valueState}</Text>
                )}
            <IconButton 
                aria-label="Edit" 
                icon={updateField ? <CheckIcon /> : <EditIcon /> } 
                size="sm" 
                onClick={updateField ? onClickCheck : onClickEdit}
            />
        </Box>
    );
};

export default UserDetailsRow;