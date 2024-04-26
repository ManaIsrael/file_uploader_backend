import express from 'express';
import fileRoutes from './routes/FileRoutes';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', fileRoutes);

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Database sync error:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
