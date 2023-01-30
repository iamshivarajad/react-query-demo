import React from "react";
import { Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { AppContextProvider } from "./store/app-context";

import Navbar from "./layout/Navbar";
import BasicQuery from "./pages/BasicQuery";
// import InfiniteQuery from "./pages/InfiniteQuery";
// import PaginatedQuery from "./pages/PaginatedQuery";
// import CreateUser from "./pages/CreateUser";
// import EditUser from "./pages/EditUser";

function App() {
    const queryClient = new QueryClient();

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='container p-4 mx-auto mt-8 lg:w-screen-lg'>
                <QueryClientProvider client={queryClient}>
                    <AppContextProvider>
                        <Switch>
                            <Route path='/' exact>
                                <BasicQuery />
                            </Route>
                            {/* <Route path='/paginated'>
                                <PaginatedQuery />
                            </Route>
                            <Route path='/infinite'>
                                <InfiniteQuery />
                            </Route>
                            <Route path='/user/create'>
                                <CreateUser />
                            </Route>
                            <Route path='/user/edit/:id'>
                                <EditUser />
                            </Route> */}
                        </Switch>
                    </AppContextProvider>
                    <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
            </main>
        </>
    );
}

export default App;
