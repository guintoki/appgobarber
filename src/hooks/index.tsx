/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';

import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
