import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { AppContextProvider } from "./store/app-context";
import reducer, { initialState } from "./store/reducer";

import Navbar from "./layout/Navbar";
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
                        <header>
                            <Navbar />
                        </header>
                        <main className='container p-4 mx-auto mt-8 lg:w-screen-lg'>
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
                        </main>
                    </Router>
                </AppContextProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}

export default App;
