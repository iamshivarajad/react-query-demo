import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Container } from "react-bootstrap";

import { AppContextProvider } from "./store/app-context";
import reducer, { initialState } from "./store/reducer";

import Navigationbar from "./layout/Navigationbar";
import BasicQuery from "./pages/BasicQuery";
import InfiniteQuery from "./pages/InfiniteQuery";
import PaginatedQuery from "./pages/PaginatedQuery";
import CreateUser from "./pages/CreateUser";
import EditUser from "./pages/EditUser";

function App() {
    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AppContextProvider
                    initialState={initialState}
                    reducer={reducer}
                >
                    <Router>
                        <Navigationbar />
                        <Container>
                            <Routes>
                                <>
                                    <Route path='/' element={<BasicQuery />} />
                                    <Route
                                        path='/paginated'
                                        element={<PaginatedQuery />}
                                    ></Route>
                                    <Route
                                        path='/infinite'
                                        element={<InfiniteQuery />}
                                    ></Route>
                                    <Route
                                        path='/user/create'
                                        element={<CreateUser />}
                                    ></Route>
                                    <Route
                                        path='/user/edit/:id'
                                        element={<EditUser />}
                                    ></Route>
                                </>
                            </Routes>
                        </Container>
                    </Router>
                </AppContextProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}

export default App;
