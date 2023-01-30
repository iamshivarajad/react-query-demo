import React, { useContext } from "react";
import { useQuery } from "react-query";
import UserTable from "../components/UserTable";
import { AppContext } from "../store/app-context";
import { actionTypes } from "../store/reducer";

const BasicQuery = () => {
    const fetchAllUsers = async () =>
        await (await fetch("http://localhost:4000/users")).json();

    const { state, dispatch } = useContext(AppContext);

    const { data, error, status } = useQuery("users", fetchAllUsers, {
        onSuccess: (data) => {
            console.log(data);
            dispatch({ type: actionTypes.SET_USERS, payload: data });
        },
    });

    return (
        <div>
            <h2>Basic Query Example</h2>
            <div>
                {status === "error" && <div>{error.message}</div>}

                {status === "loading" && <div>Loading...</div>}

                {status === "success" && <UserTable users={data} />}
            </div>
        </div>
    );
};

export default BasicQuery;
