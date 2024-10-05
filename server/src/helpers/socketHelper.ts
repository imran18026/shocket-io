import colors from 'colors';
import { Server } from 'socket.io';
import { logger } from '../shared/logger';

const socket = (io: Server) => {
  // connet a user
  io.on('connection', socket => {
    logger.info(colors.blue('A user connected successfully'));

    //disconnect a user
    socket.on('disconnect', () => {
      logger.info(colors.red('A user disconnect'));
    });
  });
};

export const socketHelper = { socket };
