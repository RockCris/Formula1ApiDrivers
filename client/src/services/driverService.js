import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Definir tu función asincrónica usando createAsyncThunk
export const fetchDrivers = createAsyncThunk('drivers/fetchDrivers', async () => {
  try {
    const response = await axios.get('http://localhost:3001/drivers'); // Ajusta la URL según tu configuración
    return response.data;
  } catch (error) {
    // Puedes manejar errores aquí según tus necesidades
    throw error;
  }
});

// Crear un slice utilizando createSlice
const driversSlice = createSlice({
  name: 'drivers',
  initialState: {
    drivers: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Puedes agregar otras acciones síncronas aquí si es necesario
  },
  extraReducers: (builder) => {
    // Manejar el estado en función de las acciones generadas por createAsyncThunk
    builder
      .addCase(fetchDrivers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDrivers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.drivers = action.payload;
      })
      .addCase(fetchDrivers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default driversSlice.reducer;
