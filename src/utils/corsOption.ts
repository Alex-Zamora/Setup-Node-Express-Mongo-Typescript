import config from 'config';

const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, origin?: string) => void) => {
    if (!origin || config.get<string>('whiteList')?.includes(origin)) {
      return callback(null, origin);
    }
    return callback(new Error('Not allowed by CORS'))
  },
  Credentials: true,
  optionsSuccessStatus: 200
}

export default corsOptions;