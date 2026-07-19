import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { CartPage } from '../pages/CartPage';
import { SchedulingPage } from '../pages/SchedulingPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
      <Route path="/servicos" element={<MainLayout><ServicesPage /></MainLayout>} />
      <Route path="/agendamento" element={<MainLayout><SchedulingPage /></MainLayout>} />
      <Route path="/carrinho" element={<MainLayout><CartPage /></MainLayout>} />
    </Routes>
  );
};