import { Route, Routes } from 'react-router-dom';
import { AgendaRoutes } from '../agenda/routes/AgendaRoutes';

import { AuthRoutes } from "../auth/routes/AuthRoutes";


export const AppRouter = () => {
  return (
    <Routes>
        //login
        <Route path="/auth/*" element={ <AuthRoutes />}/>
        //AgendaApp
        <Route path="/*" element={ <AgendaRoutes /> } />
    </Routes>
  )
}
